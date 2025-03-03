import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    // Remove the hash from sectionId if it exists
    const cleanSectionId = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
    
    if (!isHomePage) {
      // If not on home page, navigate to the section route without hash
      navigate(`/${cleanSectionId}`);
      return;
    }

    // If on home page, scroll to the section
    const element = document.getElementById(cleanSectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return scrollToSection;
}