import { arrRecordList } from '../../utils';
import { CategoryCard, TopCard } from '../Card';

export const RecordList = () => {
  return (
    <div className='flex justify-between items-center my-14'>
      {arrRecordList.map((item, idx) => (
        <CategoryCard key={idx} {...item} />
      ))}
    </div>
  );
};
