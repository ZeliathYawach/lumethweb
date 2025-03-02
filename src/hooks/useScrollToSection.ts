import { useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const navigate = useNavigate();

  const scrollToSection = (path: string) => {
    // If it's a section on the home page
    if (path === '/features' || path === '/ourapps' || path === '/aibeauty' || path === '/testimonials') {
      const sectionId = path.substring(1); // Remove the leading slash
      
      // If we're already on the home page
      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          // Simple smooth scroll
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without navigation
          window.history.pushState(null, '', `/#${sectionId}`);
        }
      } else {
        // Navigate to home page with hash
        navigate(`/#${sectionId}`);
      }
    } else {
      // For other paths, navigate normally
      navigate(path);
    }
  };

  return scrollToSection;
}