import { RingProgress } from '@mantine/core';

export const Carousel = () => {
  return (
    <>
      <div className='h-full bg-center bg-cover bg-no-repeat bg-[url("https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/d01_hjqkbl.jpg")]'></div>
      <div className='absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <RingProgress
          rootColor='#ffffff0'
          sections={[{ value: 75, color: 'white' }]}
          size={200}
          thickness={3}
          label={
            <p className='text-center text-light text-[18px] font-[400] leading-[22px]'>
              05/21
              <span className='text-[25px] font-[400] leading-[30px]'>75%</span>
            </p>
          }
        />
      </div>
    </>
  );
};
