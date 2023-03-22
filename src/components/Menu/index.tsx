import IconKnife from '../../assets/img/svg/icon_knife.svg';
import IconCup from '../../assets/img/svg/icon_cup.svg';
import { HexagonButton } from '../Button';

const arrMenuBar = [
  {
    icon: <IconKnife />,
    title: 'Morning',
  },
  {
    icon: <IconKnife />,
    title: 'Lunch',
  },
  {
    icon: <IconKnife />,
    title: 'Dinner',
  },
  {
    icon: <IconCup />,
    title: 'Snack',
  },
];

export const Menu = () => {
  return (
    <div className='flex justify-center items-center gap-16 mb-20'>
      {arrMenuBar.map((item, idx) => (
        <HexagonButton key={idx} {...item} />
      ))}
    </div>
  );
};
