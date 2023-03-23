import { useDispatch } from 'react-redux';
import { filterFoodListAction } from '../../redux/reducers/otherReducer';
import { arrMenuBar } from '../../utils';
import { HexagonButton } from '../Button';

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
