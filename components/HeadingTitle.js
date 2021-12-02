import styles from '@/styles/HeadingTitle.module.scss';

const HeadingTitle = ({ content, color, size }) => <div>{content}</div>;

export default HeadingTitle;

HeadingTitle.defaultProps = {
  content: 'Title Content',
  color: 'red',
  size: 'xs',
};
