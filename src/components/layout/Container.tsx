import { PropsWithChildren } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import { containerCSS } from './style';

const Container: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const { screenL } = useScreenSize();

  return <div style={containerCSS(screenL)}>{children}</div>;
};

export default Container;
