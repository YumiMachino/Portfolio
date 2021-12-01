const HeaderItem = ({ title, link }) => (
  <div className='flex w-3/4 bg-blue-100'>
    <p className='font-orbitron text-theme-pink m-4'>{title}</p>
    <div className='bg-theme-pink w-44 h-8 text-theme-pink block'></div>
  </div>
);

export default HeaderItem;

HeaderItem.defaultProps = {
  title: 'Header Item',
  link: '/',
};
