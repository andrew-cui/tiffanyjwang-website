import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BookProps } from "@/types/book";

type Params = {
  bookData: BookProps[];
  bookRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  offset?: number;
  setActiveBook: (_: BookProps) => void;
  setAutoScroll: (_: boolean) => void;
};

export default function useBookAutoScroll({
  bookData,
  bookRefs,
  offset = 115,
  setActiveBook,
  setAutoScroll,
}: Params) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const bookId = location.state?.scrollTo;
    if (!bookId) return;

    const book = bookData.find(b => b.html_id === bookId);
    const el = bookRefs.current[bookId];
    if (!book || !el) return;

    setActiveBook(book);
    setAutoScroll(true);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset + 1,
        behavior: 'smooth',
      });

      setAutoScroll(false);
      navigate('.', { replace: true, state: null });
    });
  }, [location.state]);
}