import { Group, Indicator } from '@mantine/core';
import IconInfo from '../../assets/img/svg/icon_info.svg';

export const IconWithIndicator = () => {
  return (
    <div className='relative'>
      <div className='-right-1 -top-1 h-4 w-4 bg-primary500 absolute rounded-full text-center text-light leading-[16px] text-[10px]'>1</div>
      <IconInfo />
    </div>
  );
};
