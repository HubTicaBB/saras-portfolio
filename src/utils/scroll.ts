import {  animateScroll, scroller } from 'react-scroll';

export const scrollTo = (element: string) => {
  scroller.scrollTo(element, {
    duration: 1000,
    offset: -60,
  })
};

export const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 100,
    delay: 0
  });
};