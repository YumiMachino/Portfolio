import Link from 'next/link';
import styles from '@/styles/components/CyButton.module.scss';

const CyButton = ({ link }) => {
  return (
    <Link href={link}>
      <a>
        <button className={styles.cyBtn}>
          <div className={styles.content}>Check Projects_</div>
          <span className={styles.glitch}></span>
        </button>
      </a>
    </Link>
  );
};

export default CyButton;
