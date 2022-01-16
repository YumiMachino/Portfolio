import Link from 'next/link';
import { FaHome, FaFileCode } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import styles from '@/styles/components/Navigation.module.scss';

const linkData = [
  {
    link: '/',
    icon: <FaHome />,
    name: 'Home',
  },
  {
    link: '/about',
    icon: <SiAboutdotme />,
    name: 'About',
  },
  {
    link: '/projects',
    icon: <FaFileCode />,
    name: 'Projects',
  },
  {
    link: '/contact',
    icon: <MdEmail />,
    name: 'Contact',
  },
];

const Navigation = () => {
  return (
    <nav className={styles.navStyles}>
      <ul>
        {linkData.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>
              <a className={styles.navItem}>
                <span className={styles.navIconStyle}> {link.icon}</span>
                <span className={styles.iconName}>{link.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
