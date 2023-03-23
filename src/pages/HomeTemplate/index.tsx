import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollButton from '../../components/Scroll';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollButton/>
    </>
  );
};

export default HomeTemplate;
