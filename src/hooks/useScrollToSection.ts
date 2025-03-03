import { useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const navigate = useNavigate();

  const scrollToSection = (path: string) => {
    // Navigate to the specified path
    navigate(path);
  };

  return scrollToSection;
}