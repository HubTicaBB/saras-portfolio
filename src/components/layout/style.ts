import { CSSProperties } from 'react';
import { colorPalette } from '../../theme/colorPalette';
import { font } from '../../theme/typography';

export const containerCSS = (screenL: boolean): CSSProperties => ({
  margin: screenL ? '100vh 15% 0' : '100vh 24px 0',
});

export const sectionCSS = (screenL: boolean): CSSProperties => ({
  paddingTop: '30px',
});

export const titleContainerCSS: CSSProperties = {
  textAlign: 'center',
  padding: '30px 0',
  position: 'relative',
};

export const titleCSS = (screenL: boolean): CSSProperties => ({
  font: screenL ? font.stylish.stor : font.stylish.mellan,
  color: colorPalette.default.darkish,
  position: 'relative',
  zIndex: 2,
});

export const titleShadowCSS = (screenL: boolean): CSSProperties => ({
  font: screenL ? font.stylish.jätte : font.stylish.stor,
  color: colorPalette.default.light,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  fontWeight: 700,
  zIndex: 1,
});
