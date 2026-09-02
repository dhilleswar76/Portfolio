import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure scroll position resets to top instantly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Double safeguard for cross-browser document scroll
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
