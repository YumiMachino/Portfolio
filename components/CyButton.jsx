import Link from 'next/link';
import styles from '@/styles/components/CyButton.module.scss';

const CyButton = ({ link, content, primary }) => {
  return (
    <Link href={link}>
      <a>
        <button className={styles.cyBtn}>
          <div
            className={`${styles.content} ${
              !primary && styles.secondaryContent
            }`}
          >
            {content}
          </div>
          <span
            className={`${styles.glitch} ${!primary && styles.secondaryGlitch}`}
          ></span>
        </button>
      </a>
    </Link>
  );
};

export default CyButton;
