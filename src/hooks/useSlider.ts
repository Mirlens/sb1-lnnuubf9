import { useState, useCallback } from 'react';

export const useSlider = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + length) % length);
  }, [length]);

  return { currentIndex, next, prev };
};