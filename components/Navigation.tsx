import Link from 'next/link';
import { FaHome, FaFileCode } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import styles from '@/styles/components/Navigation.module.scss';

const linkData = [
  {
    link: '/',
    icon: <FaHome />,
  },
  {
    link: '/about',
    icon: <SiAboutdotme />,
  },
  {
    link: '/projects',
    icon: <FaFileCode />,
  },
  {
    link: '/contact',
    icon: <MdEmail />,
  },
];

const Navigation = () => {
  return (
    <nav className={styles.navStyles}>
      <ul>
        {linkData.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>
              <a className={styles.navIconStyle}>{link.icon}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
