import IconKnife from '../../assets/img/svg/icon_knife.svg';
import IconCup from '../../assets/img/svg/icon_cup.svg';
import { HexagonButton } from '../Button';
import { useDispatch } from 'react-redux';
import { filterFoodListAction } from '../../redux/reducers/otherReducer';

const arrMenuBar = [
  {
    icon: <IconKnife />,
    title: 'Morning',
    id: 'morning',
  },
  {
    icon: <IconKnife />,
    title: 'Lunch',
    id: 'lunch',
  },
  {
    icon: <IconKnife />,
    title: 'Dinner',
    id: 'dinner',
  },
  {
    icon: <IconCup />,
    title: 'Snack',
    id: 'snack',
  },
];

export const Menu = () => {
  const dispatch = useDispatch();

  const handleFilterFoodList = (idItem: string) => {
    dispatch(filterFoodListAction(idItem));
  };

  return (
    <div className='flex justify-center items-center gap-16 mb-20'>
      {arrMenuBar.map((item, idx) => (
        <HexagonButton
          handleFilterFoodList={handleFilterFoodList}
          key={idx}
          {...item}
        />
      ))}
    </div>
  );
};
