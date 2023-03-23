import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import { ColumnCard } from '../Card';

export const BlogList = () => {
  const {
    data: { blogList },
  } = useSelector((state: RootState) => state.otherReducer);

  return (
    <div className='mt-16 flex gap-2 flex-wrap'>
      {blogList.map((item, idx) => (
        <ColumnCard {...item} key={idx} />
      ))}
    </div>
  );
};
