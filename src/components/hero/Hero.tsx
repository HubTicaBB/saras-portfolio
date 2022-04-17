import React, { useState } from 'react';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { colorPalette } from '../../theme/colorPalette';
import {
  herocontainerCSS,
  heroSectionCSS,
  scrollButtonCSS,
  subtitleCSS,
  titleCSS,
} from './style';
import './animation.css';
import useScreenSize from '../../hooks/useScreenSize';
import { useTranslation } from 'react-i18next';

type Props = {
  scrollTo: () => void;
};

const Hero: React.FC<Props> = ({ scrollTo }) => {
  const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

  const { screenL } = useScreenSize();
  const { t } = useTranslation(['content']);

  return (
    <section style={heroSectionCSS}>
      <div style={herocontainerCSS}>
        <h1 style={titleCSS(screenL)}>{t('content:home.name')}</h1>
        <h2 style={subtitleCSS(screenL)}>{t('content:home.subtitle')}</h2>
        <div
          id='scroll-button'
          onClick={scrollTo}
          onMouseOver={() => setIsButtonHovered(true)}
          onMouseOut={() => setIsButtonHovered(false)}
          style={scrollButtonCSS}
        >
          <ChevronDownIcon
            color={
              isButtonHovered
                ? colorPalette.action.active
                : colorPalette.action.airy
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
