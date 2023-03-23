import { TTitleAndTime } from '../../typescript';

export const TitleAndTime = ({ title, time }: TTitleAndTime) => {
  return (
    <div className='flex items-center gap-6 p-4 pb-2 text-light bg-dark500text'>
      <p className='font-[400] text-[15px] leading-[18px] w-10'>{title}</p>
      <p className='font-[400] text-[22px] leading-[27px] ml-4'>{time}</p>
    </div>
  );
};
