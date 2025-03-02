import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // When the location changes, check if we need to scroll to a section
    if (location.pathname === '/features') {
      const element = document.getElementById('features');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/ourapps') {
      const element = document.getElementById('ourapps');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/aibeauty') {
      const element = document.getElementById('aibeauty');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/testimonials') {
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      // Scroll to top when on home page
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const scrollToSection = (path: string) => {
    // Navigate to the path
    navigate(path);
  };

  return scrollToSection;
}