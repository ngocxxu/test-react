import { Image } from '@mantine/core';
import { TTopCard } from '../../typescript';

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

export const CategoryCard = () => {
  return (
    <div className='relative p-6 bg-primary300 inline-block'>
      <Image
        width={234}
        height={234}
        src='https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/MyRecommend-1_xk9qab.jpg'
        alt='With default placeholder'
        withPlaceholder
      />
      <div className='bg-black opacity-70 absolute h-[234px] w-[234px] top-6'></div>
      <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
        <p className='text-[25px] mb-2 leading-[30px] font-[400] text-primary300 px-2 py-1 tracking-[0.125px] truncate'>
          BODY RECORD
        </p>
        <div className='flex items-center justify-center'>
          <span className='text-[14px] font-[300] leading-[20px] text-light bg-primary400 px-3.5 py-1 text-center'>
            自分のカラダの記録
          </span>
        </div>
      </div>
    </div>
  );
};

export const ColumnCard = () => {
  const handleDotText = (text: string) => {
    if (text.length >= 29) {
      return text.slice(0, 29) + '...';
    }
    return text;
  };
  return (
    <>
      <div className='relative'>
        <Image
          width={234}
          height={156}
          src='https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/column-1_zzxxwl.jpg'
          alt='With default placeholder'
          withPlaceholder
        />
        <div className='absolute left-0 bottom-0 text-[15px] font-[400] text-light bg-primary300 px-2 py-1'>
          2021.05.17 23:25
        </div>
      </div>
      <div className='w-[234px] text-[15px] font-[300]'>
        <p>
          {handleDotText(
            '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ'
          )}
        </p>
        <p className='text-primary400'>#魚料理 #和食 #DHA</p>
      </div>
    </>
  );
};
