import { CategoryCard, TopCard } from '../Card';

const arrRecordList = [
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/MyRecommend-1_xk9qab.jpg',
    title: 'BODY RECORD',
    content: '自分のカラダの記録'
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/MyRecommend-2_fr4woc.jpg',
    title: 'MY EXERCISE',
    content: '自分の運動の記録'
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452333/reactjs-test/MyRecommend-3_m877bx.jpg',
    title: 'MY DIARY',
    content: '自分の日記'
  },
];

export const RecordList = () => {
  return (
    <div className='flex justify-between items-center my-14'>
      {arrRecordList.map((item, idx) => (
        <CategoryCard key={idx} {...item} />
      ))}
    </div>
  );
};
