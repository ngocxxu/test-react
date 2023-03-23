import { Button } from '@mantine/core';
import { THexagonButton, TSeeMoreButton } from '../../typescript';
import './style.css';

export const SeeMoreButton = ({ title }: TSeeMoreButton) => {
  return (
    <Button
      className='font-[300] text-[18px] leading-[26px]'
      style={{
        background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
        width: '296px',
        height: '56px',
      }}
      radius='sm'
      size='xl'
    >
      {title}
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
