// Centralize navigation items configuration
export const navigationItems = [
<<<<<<< HEAD
  { id: 'features', label: 'Features', path: '/features' },
  { id: 'ourapps', label: 'Our Apps', path: '/ourapps' },
  { id: 'aibeauty', label: 'AI Beauty', path: '/aibeauty' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'testimonials', label: 'Testimonials', path: '/testimonials' }
=======
  { id: 'features', label: 'Features', path: '/#features' },
  { id: 'ourapps', label: 'Our Apps', path: '/#ourapps' },
  { id: 'aibeauty', label: 'AI Beauty', path: '/#aibeauty' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'testimonials', label: 'Testimonials', path: '/#testimonials' }
>>>>>>> 1472b9f (Initial commit)
] as const;

export type NavigationItem = typeof navigationItems[number];