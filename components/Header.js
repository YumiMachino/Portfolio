import Image from 'next/image';
import Link from 'next/link';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header className='z-50 w-4/5 h-24  flex justify-between outline-white mx-auto '>
      <div className='text-white outline-white w-18'>
        <Link href='/'>
          <Image
            src='/../public/logoImg.png'
            alt='logo'
            width={90}
            height={90}
          />
        </Link>
      </div>
      <div className='outline-white h-24 w-auto'>
        <HeaderItem />
        <HeaderItem />
      </div>
    </header>
  );
};

export default Header;
