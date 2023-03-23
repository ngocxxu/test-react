import { ScrollArea, Box, Group, List, Divider } from '@mantine/core';
import { TitleAndTime } from '../Others';

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
        <div>
          <TitleAndTime title='MY EXERCISE' time='2021.05.01' />
          <div className='px-4'>
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
