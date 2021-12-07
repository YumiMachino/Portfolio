import useMousePosition from './useMousePosition';
import styles from '@/styles/components/DotRing.module.scss';

//https://dev.to/holdmypotion/react-custom-cursor-no-extra-dependencies-25ki
const DotRing = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={styles.ring}
      ></div>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={styles.dot}
      ></div>
    </div>
  );
};

export default DotRing;
