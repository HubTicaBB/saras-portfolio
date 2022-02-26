import { PropsWithChildren } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import { containerCSS } from './style';

const Container = ({children}: PropsWithChildren<any>) => {
  const {screenL} = useScreenSize();

  return (
    <div style={containerCSS(screenL)}>
      {children}
    </div>
  )
}

export default Container;