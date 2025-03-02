import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (path: string) => {
    // Navigate to the path
    navigate(path);
  };

  return scrollToSection;
}