import { SeeMoreButton } from '../../../components/Button';
import { LineChart } from '../../../components/Chart';
import { FoodList } from '../../../components/FoodList';
import { Menu } from '../../../components/Menu';

const Home = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-1/2 h-[340px] bg-center bg-cover bg-no-repeat bg-[url("https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/d01_hjqkbl.jpg")]'>
          {/* <Image
          width={540}
          height={316}
          src='https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/d01_hjqkbl.jpg'
          alt='With default placeholder'
          withPlaceholder
        /> */}
        </div>
        <div className='w-1/2'>
          <LineChart />
        </div>
      </div>
      <div className='w-[960px] mx-auto'>
        <Menu />
        <FoodList />
      </div>

      <div className='flex justify-center items-center mt-10'>
        <SeeMoreButton />
      </div>
    </div>
  );
};

export default Home;
