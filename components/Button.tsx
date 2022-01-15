import Link from 'next/link';
import styles from '@/styles/components/Button.module.scss';

type ButtonProps = {
  isPrimary: boolean;
  link?: string;
  content: string;
};

const Button = (props: ButtonProps) => {
  const { isPrimary, link, content } = props;

  if (link) {
    return (
      <Link href={link}>
        <a>
          <button className={styles.mainBtn}>
            <div
              className={`${styles.content} ${
                !isPrimary && styles.secondaryContent
              }`}
            >
              {content}
            </div>
            <span
              className={`${styles.glitch} ${
                !isPrimary && styles.secondaryGlitch
              }`}
            ></span>
          </button>
        </a>
      </Link>
    );
  } else {
    return (
      <button className={styles.mainBtn}>
        <div
          className={`${styles.content} ${
            !isPrimary && styles.secondaryContent
          }`}
        >
          {content}
        </div>
        <span
          className={`${styles.glitch} ${!isPrimary && styles.secondaryGlitch}`}
        ></span>
      </button>
    );
  }
};

export default Button;
