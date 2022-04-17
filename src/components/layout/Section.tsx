import { PropsWithChildren } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import {
  sectionCSS,
  titleContainerCSS,
  titleCSS,
  titleShadowCSS,
} from './style';

const Section: React.FC<PropsWithChildren<any>> = ({ title, children }) => {
  const { screenL } = useScreenSize();

  return (
    <div style={sectionCSS(screenL)}>
      <div style={titleContainerCSS}>
        <span style={titleShadowCSS(screenL)}>{title}</span>
        <h2 style={titleCSS(screenL)}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Section;
