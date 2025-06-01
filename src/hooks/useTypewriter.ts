import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const useTypewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentWord = words[wordIndex];
    let isDeleting = false;
    let charIndex = 0;

    const type = () => {
      if (!isDeleting && charIndex <= currentWord.length) {
        setText(currentWord.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
        setText(currentWord.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, deletingSpeed);
      } else if (!isDeleting) {
        isDeleting = true;
        timeout = setTimeout(type, pauseTime);
      } else {
        isDeleting = false;
        setWordIndex((prev) => (prev + 1) % words.length);
        charIndex = 0;
        timeout = setTimeout(type, typingSpeed);
      }
    };

    timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [words, wordIndex, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
