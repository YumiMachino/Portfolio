import styles from '@/styles/components/Button.module.scss';

const Button = ({ primary, big, content }) => {
  return (
    <button
      className={`${primary ? styles.primaryBtn : styles.secondaryBtn} ${
        big ? styles.lg : styles.sm
      } ${styles.btn}`}
    >
      {content}
    </button>
  );
};

export default Button;
