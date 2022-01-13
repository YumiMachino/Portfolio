import Link from 'next/link';
import styles from '@/styles/components/HeaderItem.module.scss';

type HeaderItemProps = {
  title: string;
  link: string;
};

const HeaderItem: React.FC<HeaderItemProps> = ({ title, link }) => (
  <h2 className={styles.headerItem}>
    <Link href={link}>
      <a className={styles.item}>{title}</a>
    </Link>
  </h2>
);

export default HeaderItem;
