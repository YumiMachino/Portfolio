import Link from 'next/link';
import styles from '@/styles/components/HeaderItem.module.scss';

const HeaderItem = ({ title, link }) => (
  <h2 className={styles.headerItem}>
    <Link href={link}>
      <a>{title}</a>
    </Link>
  </h2>
);

export default HeaderItem;

// HeaderItem.defaultProps = {
//   title: 'Header Item',
//   link: '/',
// };
