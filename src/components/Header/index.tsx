import Logo from '../../assets/img/svg/logo.svg';
import IconMemo from '../../assets/img/svg/icon_memo.svg';
import IconChallenge from '../../assets/img/svg/icon_challenge.svg';
import { Dropdown } from '../Dropdown';
import { IconWithIndicator } from '../Icon';

const arrTitleHeader = [
  {
    icon: <IconMemo />,
    title: '自分の記録',
  },
  {
    icon: <IconChallenge />,
    title: '自分の記録',
  },
  {
    icon: <IconWithIndicator />,
    title: '自分の記録',
  },
];

const Header = () => {
  return (
    <div className='flex justify-around items-center bg-dark500text'>
      <div className='cursor-pointer'>
        <Logo />
      </div>
      <div className='flex justify-center items-center cursor-pointer'>
        {arrTitleHeader.map((item, idx) => (
          <div
            key={idx}
            className='flex justify-center items-center hover:bg-dark600 p-4'
          >
            {item.icon}
            <p className='text-light ml-2 text-[16px] leading-[23px]'>
              {item.title}
            </p>
          </div>
        ))}
        <div className='ml-8'>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
