import React from 'react';
import { RecommendCard } from '../Card';

const arrRecommendList = [
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

export const RecommendList = () => {
  return (
    <div className='mt-16 flex justify-between items-center'>
      {arrRecommendList.map((item, idx) => (
        <RecommendCard key={idx} {...item} />
      ))}
    </div>
  );
};
