import { Button } from '@mantine/core';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogList } from '../../../components/BlogList';
import { SeeMoreButton, TimerButton } from '../../../components/Button';
import { Carousel } from '../../../components/Carousel';
import { LineChart } from '../../../components/Chart';
import { DiaryList } from '../../../components/DiaryList';
import { ExerciseList } from '../../../components/ExerciseList';
import { FoodList } from '../../../components/FoodList';
import { Menu } from '../../../components/Menu';
import { TitleAndTime } from '../../../components/Others';
import { RecommendList } from '../../../components/RecommendList';
import { RecordList } from '../../../components/RecordList';
import { RootState } from '../../../redux/configStore';
import {
  addNumberListAction,
  storageDataAction,
} from '../../../redux/reducers/otherReducer';
import { arrContentLoadButton, Timer } from '../../../utils';

const Home = () => {
  const { loadNumberList } = useSelector(
    (state: RootState) => state.otherReducer
  );
  const dispatch = useDispatch();

  const handleAddMorePage = () => dispatch(addNumberListAction(1));

  const handleDetectContent = () => {
    if (loadNumberList.length > 2)
      return arrContentLoadButton[arrContentLoadButton.length - 1];
    if (loadNumberList.length > 0) {
      return arrContentLoadButton.find(
        (_, idx) => idx === loadNumberList.length
      );
    }
    return arrContentLoadButton[0];
  };

  useEffect(() => {
    axios
      .get('/mockApi.json')
      .then((response) => {
        dispatch(storageDataAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* First Load Page */}
      <div>
        <div className='flex justify-center items-center'>
          <div className='h-[312px] w-[42%] relative'>
            <Carousel />
          </div>
          <div className='w-[58%] bg-[#2E2E2E] p-6 h-[312px]'>
            <LineChart />
          </div>
        </div>
        <div className='w-[960px] mx-auto'>
          <Menu />
          <FoodList />
        </div>
      </div>

      {/* Second Load Page */}
      {loadNumberList.includes(1) && (
        <div className='w-[960px] mx-auto'>
          <RecordList />
          <div>
            <TitleAndTime title='BODY RECORD' time='2021.05.01' />
            <div className='bg-dark500text p-6'>
              <LineChart />
              <TimerButton />
            </div>
          </div>
          <ExerciseList />
          <DiaryList />
        </div>
      )}

      {/* Third Load Page */}
      {loadNumberList.includes(2) && (
        <div className='w-[960px] mx-auto'>
          <RecommendList />
          <BlogList />
        </div>
      )}

      <div className='flex justify-center items-center mt-10'>
        <SeeMoreButton
          handleAddMorePage={handleAddMorePage}
          title={handleDetectContent}
        />
      </div>
    </>
  );
};

export default Home;
