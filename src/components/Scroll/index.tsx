import { useState } from 'react';
import IconScroll from '../../assets/img/svg/component_scroll.svg';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);
 
  return (
    <>
      {visible && (
        <span className='fixed left-[90%] bottom-5 z-1 cursor-pointer text-green'>
          <div onClick={scrollToTop}>
            <IconScroll />
          </div>
        </span>
      )}
    </>
  );
};

export default ScrollButton;
