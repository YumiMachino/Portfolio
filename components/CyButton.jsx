import styles from '@/styles/components/CyButton.module.scss';

const CyButton = () => {
  return (
    <button className={styles.cyBtn}>
      <div className={styles.content}>Check Projects_</div>
      <span className={styles.glitch}></span>
    </button>
  );
};

export default CyButton;
