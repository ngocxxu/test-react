import { Burger, Divider, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const arrTitleMenu = [
  '自分の記録',
  '体重グラフ',
  '目標',
  '選択中のコース',
  'コラム一覧',
  '設定',
];

export const Dropdown = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Popover
      onClose={toggle}
      styles={{ dropdown: { padding: '0px' } }}
      width={200}
      position='bottom-end'
      shadow='md'
    >
      <Popover.Target>
        <div>
          <Burger
            color='#FF963C'
            opened={opened}
            onClick={toggle}
            aria-label={label}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <div className='bg-gray400'>
          {arrTitleMenu.map((item, idx) => {
            return (
              <div
                className='cursor-pointer hover:bg-dark500text'
                key={idx}
                onClick={() => console.log('Hello')}
              >
                <div className='border-b border-b-[#1a191927]'>
                  <Text
                    className='text-light text-[18px] font-[300] py-6 ml-6'
                    size='sm'
                  >
                    {item}
                  </Text>
                </div>
                {idx !== arrTitleMenu.length - 1 && (
                  <Divider color='#ffffff2a' className='opacity-25' />
                )}
              </div>
            );
          })}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
