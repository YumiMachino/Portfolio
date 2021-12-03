import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Logo.module.scss';

const Logo = ({ link }) => {
  return (
    <div>
      <div className={styles.logo}>
        <Link href={link}>
          <Image src={'/logo_img.png'} alt='logo' width={90} height={90} />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
