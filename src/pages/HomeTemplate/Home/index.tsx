import { useEffect } from 'react';
import { BlogList } from '../../../components/BlogList';
import { SeeMoreButton } from '../../../components/Button';
import { LineChart } from '../../../components/Chart';
import { DiaryList } from '../../../components/DiaryList';
import { ExerciseList } from '../../../components/ExerciseList';
import { FoodList } from '../../../components/FoodList';
import { Menu } from '../../../components/Menu';
import { RecommendList } from '../../../components/RecommendList';
import { RecordList } from '../../../components/RecordList';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { storageDataAction } from '../../../redux/reducers/otherReducer';

const Home = () => {
  const dispatch = useDispatch();

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
          <div className='h-[312px] w-[42%]'>
            <div className='h-full bg-center bg-cover bg-no-repeat bg-[url("https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/d01_hjqkbl.jpg")]'></div>
          </div>
          <div className='w-[58%]'>
            <LineChart />
          </div>
        </div>
        <div className='w-[960px] mx-auto'>
          <Menu />
          <FoodList />
        </div>
      </div>

      {/* Second Load Page */}
      <div className='w-[960px] mx-auto'>
        <RecordList />
        <LineChart />
        <ExerciseList />
        <DiaryList />
        <RecommendList />
        <BlogList />
      </div>

      {/* Third Load Page */}
      <div className='w-[960px] mx-auto'></div>

      <div className='flex justify-center items-center mt-10'>
        <SeeMoreButton title='記録をもっと見る' />
      </div>
    </>
  );
};

export default Home;
