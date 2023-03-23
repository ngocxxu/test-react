import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import { TopCard } from '../Card';

export const FoodList = () => {
  const {
    data: { foodList },
  } = useSelector((state: RootState) => state.otherReducer);

  return (
    <div className='flex gap-2 flex-wrap'>
      {foodList.map((item, idx) => (
        <TopCard key={idx} {...item} />
      ))}
    </div>
  );
};
