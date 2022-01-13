import Link from 'next/link';
import styles from '@/styles/components/Pagination.module.scss';

type PaginationProps = {
  next: boolean;
  link: string;
  page: string;
};

const Pagination: React.FC<PaginationProps> = ({ next, link, page }) => (
  <Link href={link}>
    <div
      className={`${next ? styles.nextPagination : styles.backPagination} ${
        styles.pagination
      }`}
    >
      <a>{page}</a>
    </div>
  </Link>
);

export default Pagination;

Pagination.defautProps = {
  next: true,
};
