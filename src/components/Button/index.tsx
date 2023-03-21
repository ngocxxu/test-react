import { Button } from '@mantine/core';
import Hexagon from '../../assets/img/svg/hexagon.svg';
import IconKnife from '../../assets/img/svg/icon_knife.svg';
import { THexagonButton } from '../../typescript';
import './style.css';

export const SeeMoreButton = () => {
  return (
    <Button
      style={{
        background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
        width: '296px',
        height: '56px',
      }}
      radius='md'
      size='xl'
    >
      記録をもっと見る
    </Button>
  );
};

export const HexagonButton = ({ title, Icon }: THexagonButton) => {
  return (
    <div className='hexagon'>
      <div className='flex flex-col'>
        <Icon />
        <div className=''>{title}</div>
      </div>

      <div className='face1'></div>
      <div className='face2'></div>
    </div>
  );
};
