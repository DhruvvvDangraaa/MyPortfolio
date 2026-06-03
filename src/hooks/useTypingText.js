import { useEffect, useState } from 'react';

export function useTypingText(words, speed = 72, pause = 1100) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && letterIndex < current.length) {
          setLetterIndex((value) => value + 1);
          return;
        }

        if (!isDeleting && letterIndex === current.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && letterIndex > 0) {
          setLetterIndex((value) => value - 1);
          return;
        }

        setIsDeleting(false);
        setWordIndex((value) => (value + 1) % words.length);
      },
      !isDeleting && letterIndex === current.length ? pause : isDeleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [isDeleting, letterIndex, pause, speed, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}
