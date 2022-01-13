import Link from 'next/link';
import styles from '@/styles/components/Button.module.scss';

type ButtonProps = {
  isPrimary: boolean;
  link: string;
  content: string;
} & typeof defaultProps;

const defaultProps = {
  isPrimary: true,
  link: '/',
  content: 'check projects_',
};

const Button = (props: ButtonProps) => {
  const { isPrimary, link, content } = props;

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
};

Button.defaultProps = defaultProps;

export default Button;
