import IconKnife from '../assets/img/svg/icon_knife.svg';
import IconCup from '../assets/img/svg/icon_cup.svg';

export const arrContentLoadButton = [
  '記録をもっと見る',
  '自分の日記をもっと見る',
  'コラムをもっと見る',
];

export const arrRecordList = [
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/MyRecommend-1_xk9qab.jpg',
    title: 'BODY RECORD',
    content: '自分のカラダの記録',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/MyRecommend-2_fr4woc.jpg',
    title: 'MY EXERCISE',
    content: '自分の運動の記録',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452333/reactjs-test/MyRecommend-3_m877bx.jpg',
    title: 'MY DIARY',
    content: '自分の日記',
  },
];

export const arrRecommendList = [
  {
    title: 'RECOMMENDED COLUMN',
    content: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    content: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    content: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    content: '健康',
  },
];

export const arrMenuBar = [
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

export const Timer = ['日', '週', '月', '年'];
