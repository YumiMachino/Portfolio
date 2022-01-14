import styles from '@/styles/components/Arrow.module.scss';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Link from 'next/link';

type ArrowProps = {
  nextLink: string;
};

const Arrow: React.FC<ArrowProps> = ({ nextLink }) => {
  return (
    <div className={styles.arrowStyle}>
      <Link href={nextLink}>
        <a>
          <FaAngleDoubleDown className={styles.arrowIcon} />
        </a>
      </Link>
    </div>
  );
};

export default Arrow;
