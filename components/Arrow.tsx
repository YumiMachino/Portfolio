import styles from '@/styles/components/Arrow.module.scss';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Link from 'next/link';

type ArrowProps = {
  nextLink: string;
  indicator: string;
};

const Arrow: React.FC<ArrowProps> = ({ nextLink, indicator }) => {
  return (
    <div className={styles.arrowStyle}>
      <Link href={nextLink}>
        <a className={styles.next}>
          <FaAngleDoubleDown className={styles.arrowIcon} />
          <p>{indicator}</p>
        </a>
      </Link>
    </div>
  );
};

export default Arrow;
