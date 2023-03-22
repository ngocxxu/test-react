import { TopCard } from '../Card';

const arrFoodList = [
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/m01_gde0tr.jpg',
    title: '05.21.Morning',
    id: 'morning',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/l03_p5yoi4.jpg',
    title: '05.21.Lunch',
    id: 'lunch',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/d01_hjqkbl.jpg',
    title: '05.21.Dinner',
    id: 'dinner',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/l01_gabbqi.jpg',
    title: '05.21.Snack',
    id: 'snack',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/m01_gde0tr.jpg',
    title: '05.21.Morning',
    id: 'morning',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/l02_fabyjd.jpg',
    title: '05.21.Lunch',
    id: 'lunch',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/d02_ovp0ic.jpg',
    title: '05.21.Dinner',
    id: 'dinner',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452330/reactjs-test/s01_ffu8ra.jpg',
    title: '05.21.Snack',
    id: 'snack',
  },
];

export const FoodList = () => {
  return (
    <div className='flex gap-2 flex-wrap'>
      {arrFoodList.map((item, idx) => (
        <TopCard key={idx} {...item} />
      ))}
    </div>
  );
};
