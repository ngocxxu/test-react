import { Image } from '@mantine/core';
import {
  TCategoryCard,
  TColumnCard,
  TRecommendCard,
  TTopCard,
} from '../../typescript';

export const TopCard = ({ img, title }: TTopCard) => {
  return (
    <div className='relative mx-auto flex-[1_0_21%]'>
      <Image
        width={234}
        height={234}
        src={img}
        alt='With default placeholder'
        withPlaceholder
      />
      <div className='absolute left-0 bottom-0 text-[15px] font-[400] text-light bg-primary300 px-2 py-1'>
        {title}
      </div>
    </div>
  );
};

export const CategoryCard = ({ img, title, content }: TCategoryCard) => {
  return (
    <div className='relative p-6 bg-primary300 inline-block'>
      <Image
        width={234}
        height={234}
        src={img}
        alt='With default placeholder'
        withPlaceholder
      />
      <div className='bg-black opacity-70 absolute h-[234px] w-[234px] top-6'></div>
      <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
        <p className='text-[25px] mb-2 leading-[30px] font-[400] text-primary300 px-2 py-1 tracking-[0.125px] truncate'>
          {title}
        </p>
        <div className='flex items-center justify-center'>
          <span className='text-[14px] font-[300] leading-[20px] text-light bg-primary400 px-3.5 py-1 text-center'>
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ColumnCard = ({ img, time, content, hashtag }: TColumnCard) => {
  const handleDotText = (text: string) => {
    if (text.length >= 29) {
      return text.slice(0, 29) + '...';
    }
    return text;
  };
  return (
    <div>
      <div className='relative cursor-pointer'>
        <Image
          width={234}
          height={156}
          src={img}
          alt='With default placeholder'
          withPlaceholder
        />
        <div className='absolute left-0 bottom-0 text-[15px] font-[400] text-light bg-primary300 px-2 py-1'>
          {time}
        </div>
      </div>
      <div className='w-[234px] text-[15px] font-[300]'>
        <p>{handleDotText(content)}</p>
        <p className='text-primary400'>{hashtag}</p>
      </div>
    </div>
  );
};

export const RecommendCard = ({ title, content }: TRecommendCard) => (
  <div className='w-[216px] h-[144px] bg-dark600 flex flex-col justify-center items-center text-center'>
    <p className='font-[400] text-[22px] leading-[27px] tracking-[.11px] text-primary300400'>
      {title}
    </p>
    <div className='w-[56px] border-b my-3'></div>
    <p className='font-[300] text-[18px] leading-[26px] text-light'>
      {content}
    </p>
  </div>
);
