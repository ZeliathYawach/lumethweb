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
<<<<<<< HEAD
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
=======
    const [basePath, hash] = path.split('#');
    
    if (location.pathname !== basePath && basePath !== '') {
      navigate(path);
    } else if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
>>>>>>> 1472b9f (Initial commit)
    }
  };

  return scrollToSection;
}