import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BookProps } from "@/types/book";


type Params = {
  bookData: BookProps[];
  bookRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  offset?: number;
  setActiveBook: (_: BookProps) => void;
  setAutoScroll: (_: boolean) => void;
  autoScrollDuration?: number;
};

export default function useBookAutoScroll({
  bookData,
  bookRefs,
  offset = 115,
  setActiveBook,
  setAutoScroll,
  autoScrollDuration = 400
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

    // let layout settle one frame
    requestAnimationFrame(() => {
      const y = el.offsetTop - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      // keep autoScroll locked long enough for Safari
      setTimeout(() => {
        setAutoScroll(false);
        navigate('.', { replace: true, state: null });
      }, autoScrollDuration); // longer than Safari's smooth scroll
    });
  }, [location.state]);
}