import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const scrollToSection = (path: string) => {
    // Check if the path contains an ID (for scrolling to a section)
    const isIdPath = path.startsWith('/') && !path.includes('/', 1);
    const id = isIdPath ? path.substring(1) : '';
    
    if (id) {
      // It's a section on the current page
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // It's a different page
      navigate(path);
    }
  };

  return scrollToSection;
}