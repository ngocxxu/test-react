import { arrRecommendList } from '../../utils';
import { RecommendCard } from '../Card';

export const RecommendList = () => {
  return (
    <div className='mt-16 flex justify-between items-center'>
      {arrRecommendList.map((item, idx) => (
        <RecommendCard key={idx} {...item} />
      ))}
    </div>
  );
};
