import styles from '@/styles/components/HeadingTitle.module.scss';

type HeadingTitleProps = {
  title: string;
};

const HeadingTitle: React.FC<HeadingTitleProps> = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

export default HeadingTitle;
