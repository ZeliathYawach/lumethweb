import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home page with hash
      navigate(`/#${sectionId}`);
      return;
    }

    // If on home page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return scrollToSection;
}