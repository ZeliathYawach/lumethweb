// Centralize navigation items configuration
export const navigationItems = [
<<<<<<< HEAD
<<<<<<< HEAD
  { id: 'features', label: 'Features', path: '/features' },
  { id: 'ourapps', label: 'Our Apps', path: '/ourapps' },
  { id: 'aibeauty', label: 'AI Beauty', path: '/aibeauty' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'testimonials', label: 'Testimonials', path: '/testimonials' }
=======
=======
>>>>>>> 727b76e (Your commit message)
  { id: 'features', label: 'Features', path: '/#features' },
  { id: 'ourapps', label: 'Our Apps', path: '/#ourapps' },
  { id: 'aibeauty', label: 'AI Beauty', path: '/#aibeauty' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'testimonials', label: 'Testimonials', path: '/#testimonials' }
<<<<<<< HEAD
>>>>>>> 1472b9f (Initial commit)
=======
>>>>>>> 727b76e (Your commit message)
] as const;

export type NavigationItem = typeof navigationItems[number];