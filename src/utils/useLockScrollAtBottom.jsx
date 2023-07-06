import { useEffect, useState } from 'react';

const useLockScrollAtBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setIsBottom(true);
      }
    };

    const preventScroll = (e) => {
      if (isBottom) {
        e.preventDefault();
        window.scrollTo(0, document.body.scrollHeight);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('wheel', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('wheel', preventScroll);
    };
  }, [isBottom]);

};

export default useLockScrollAtBottom;