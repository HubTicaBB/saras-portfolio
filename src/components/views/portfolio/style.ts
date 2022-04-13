import { CSSProperties } from 'react';
import { colorPalette } from '../../../theme/colorPalette';
import { font } from '../../../theme/typography';

export const filtersCSS: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  marginBottom: '30px',
  padding: 0,
};

export const filterCSS = (
  isHovered: boolean,
  isFocused: boolean,
  screenL: boolean
): CSSProperties => ({
  cursor: 'pointer',
  display: 'inline-block',
  margin: screenL ? '0 9px' : '0 4px',
  font: font.default.femton,
  border: '1px solid',
  borderRadius: '20px',
  borderColor: isFocused
    ? colorPalette.action.active
    : isHovered
    ? colorPalette.action.hover
    : colorPalette.default.darkish,
  padding: '4px 12px',
  color: isFocused
    ? colorPalette.action.active
    : isHovered
    ? colorPalette.action.hover
    : colorPalette.default.darkish,
  transition: '0.3s',
});

export const columnCSS = (
  screenS: boolean,
  screenL: boolean
): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  width: screenS ? '100%' : '33.33333%',
});

export const artworkContainerCSS = (): CSSProperties => ({
  width: '100%',
  padding: '6px',
});

export const artworkCSS = (): CSSProperties => ({
  position: 'relative',
  overflow: 'hidden',
});

export const imageCSS = (isHovered: boolean): CSSProperties => ({
  width: '100%',
  transition: 'all 0.8s ease-in-out',
  transform: isHovered ? 'scale(1.3)' : 'none',
});

export const artworkInfoCSS = (isHovered: boolean): CSSProperties => ({
  opacity: isHovered ? 1 : 0,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 3,
  transition: 'all 0.8s ease-in-out',
  background: colorPalette.background.darkTransparent,
  padding: '10px 15px',
  color: colorPalette.default.white,
  margin: 0,
});

export const nameCSS = (): CSSProperties => ({
  font: font.default.arton,
});

export const detailsCSS = (): CSSProperties => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  font: font.default.tretton,
});

export const priceStatusCSS = (): CSSProperties => ({
  color: colorPalette.action.active,
});
