
interface NavigationItem {
    name: string;
    href: string;
  }
  

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'About', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'News', href: '#' },
  ];

export default navigation