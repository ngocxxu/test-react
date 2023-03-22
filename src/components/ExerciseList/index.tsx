import { ScrollArea, Box, Group, List, Divider } from '@mantine/core';

export const ExerciseList = () => {
  return (
    <Group className='my-14 bg-dark500text text-light' position='center'>
      <ScrollArea
        w={'100%'}
        h={264}
        type='always'
        styles={() => ({
          scrollbar: {
            '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
              backgroundColor: '#FFCC21',
            },
          },
        })}
      >
        <div className='p-4'>
          <div className='flex items-center gap-6 mb-2'>
            <p className='font-[400] text-[15px] leading-[18px]'>
              MY <br /> EXERCISE
            </p>
            <p className='font-[400] text-[22px] leading-[27px]'>2021.05.01</p>
          </div>
          <div>
            <List className='text-light list-disc justify-between flex flex-wrap gap-y-2'>
              {Array(50)
                .fill(0)
                .map((_, idx) => (
                  <List.Item
                    key={idx}
                    className='w-[48%] border-b border-gray400'
                  >
                    <div className='flex justify-between items-start w-[400px]'>
                      <div>
                        <p>家事全般（立位・軽い）</p>
                        <p className='text-primary300400'>26kcal</p>
                      </div>
                      <p className='text-primary300400 text-right'>10 min</p>
                    </div>
                  </List.Item>
                ))}
            </List>
          </div>
        </div>
      </ScrollArea>
    </Group>
  );
};
