import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Logo.module.scss';

type LogoProps = {
  link: string;
};

const Logo: React.FC<LogoProps> = ({ link }) => {
  return (
    <div className={styles.logo}>
      <Link href={link}>
        <Image src={'/logo_img.png'} alt='logo' layout='fill' />
      </Link>
    </div>
  );
};

export default Logo;
