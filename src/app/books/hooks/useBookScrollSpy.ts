import { useEffect, useState } from 'react';
import type { BookProps } from "@/types/book";

type Params = {
  bookData: BookProps[];
  bookRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  offset?: number;
  threshold?: number;
  autoScroll: boolean;
  activeBook: BookProps | null;
  setActiveBook: (_: BookProps) => void;
};

export default function useBookScrollSpy({
  bookData,
  bookRefs,
  offset = 115,
  threshold = 400,
  autoScroll,
  activeBook,
  setActiveBook,
}: Params) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollSpy = () => {
      if (autoScroll) return;

      const scrollY = window.scrollY + offset;
      setScrolled(scrollY > threshold);

      for (let i = bookData.length - 1; i >= 0; i--) {
        const el = bookRefs.current[bookData[i].html_id];
        if (!el) continue;

        if (scrollY >= el.offsetTop) {
          if (activeBook?.html_id !== bookData[i].html_id) {
            setActiveBook(bookData[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [autoScroll, activeBook]);

  return { scrolled };
}