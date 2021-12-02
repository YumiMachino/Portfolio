import Image from 'next/image';
import Link from 'next/link';
import HeaderItem from './HeaderItem';
import styles from '@/styles/components/Header.module.scss';

const Header = ({ headerItems }) => {
  const { home, about, projects, contact } = headerItems;

  return (
    <header className={styles.container}>
      <div>
        <div className={styles.logo}>
          <Link href={home.link}>
            <Image src={'/logo_img.png'} alt='logo' width={90} height={90} />
          </Link>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <HeaderItem title={home.item} link={home.link} />
        <HeaderItem title={about.item} link={about.link} />
        <HeaderItem title={projects.item} link={projects.link} />
        <HeaderItem title={contact.item} link={contact.link} />
      </div>
    </header>
  );
};

export default Header;
