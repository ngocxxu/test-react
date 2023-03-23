import { Button } from '@mantine/core';
import { THexagonButton, TSeeMoreButton } from '../../typescript';
import { Timer } from '../../utils';
import './style.css';

export const SeeMoreButton = ({ title, handleAddMorePage }: TSeeMoreButton) => {
  return (
    <Button
      onClick={handleAddMorePage}
      className='font-[300] text-[18px] leading-[26px]'
      style={{
        background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
        width: '296px',
        height: '56px',
      }}
      radius='sm'
      size='xl'
    >
      {title()}
    </Button>
  );
};

export const HexagonButton = ({
  title,
  icon,
  id,
  handleFilterFoodList,
}: THexagonButton) => {
  return (
    <div className='hexagon' onClick={() => handleFilterFoodList(id)}>
      <div className='flex flex-col justify-center items-center'>
        {icon}
        <div>{title}</div>
      </div>

      <div className='face1'></div>
      <div className='face2'></div>
    </div>
  );
};

export const TimerButton = () => (
  <div className='flex justify-start items-center gap-6 mt-2'>
    {Timer.map((item, idx) => (
      <Button
        sx={() => ({
          '&:hover': {
            backgroundColor: 'yellow',
          },
        })}
        key={idx}
        className={`${
          Timer.length - 1 === idx
            ? 'bg-primary300400'
            : 'bg-white text-primary300400'
        } text-[15px] font-[300]`}
        radius='lg'
      >
        &nbsp; &nbsp;{item}&nbsp; &nbsp;
      </Button>
    ))}
  </div>
);
