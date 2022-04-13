import { useState, useEffect } from 'react';
import { LARGE_SCREEN_SIZE, SMALL_SCREEN_SIZE } from '../constants';

const getScreenHeight = () => window.innerHeight;

const getScreenS = () => window.innerWidth <= SMALL_SCREEN_SIZE;
const getScreenM = () =>
  window.innerWidth > SMALL_SCREEN_SIZE &&
  window.innerWidth < LARGE_SCREEN_SIZE;
const getScreenL = () => window.innerWidth >= LARGE_SCREEN_SIZE;

const useScreenSize = () => {
  const [screenHeight, setScreenHeight] = useState(getScreenHeight());
  const [screenS, setScreenS] = useState(getScreenS());
  const [screenM, setScreenM] = useState(getScreenM());
  const [screenL, setScreenL] = useState(getScreenL());

  const handleResize = () => {
    setScreenS(getScreenS());
    setScreenM(getScreenM());
    setScreenL(getScreenL());
    setScreenHeight(getScreenHeight());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    screenHeight,
    screenS,
    screenM,
    screenL,
  };
};

export default useScreenSize;
