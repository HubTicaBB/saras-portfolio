import { CSSProperties } from 'react';
import { flexCenterNoMargin } from '../../cssProperties';
import { colorPalette } from '../../theme/colorPalette';
import { font } from '../../theme/typography';

export const headerCSS = (isHeaderScrolled: boolean): CSSProperties => ({
  ...flexCenterNoMargin,
  background: isHeaderScrolled ? colorPalette.header.dark : 'transparent',
  height: isHeaderScrolled ? '60px' : '80px',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'all 1s',
  zIndex: 997,
});

export const navbarCSS: CSSProperties = {
  ...flexCenterNoMargin,
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: 0,
  position: 'relative',
};

export const navItemsCSS: CSSProperties = {
  ...flexCenterNoMargin,
  listStyle: 'none',
  padding: 0,
};

export const navItemCSS: CSSProperties = {
  position: 'relative',
};

export const navLinkCSS = (
  isHovered: boolean,
  isFocused: boolean,
  defaultColor: string
): CSSProperties => ({
  alignItems: 'center',
  color: isFocused
    ? colorPalette.action.active
    : isHovered
    ? colorPalette.action.hover
    : defaultColor,
  display: 'flex',
  font: font.default.tolv,
  fontWeight: 600,
  justifyContent: 'space-between',
  letterSpacing: '1px',
  padding: '10px 15px',
  position: 'relative',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: '0.3s',
  whiteSpace: 'nowrap',
  cursor: isFocused ? 'default' : 'pointer',
});

export const mobileNavbarCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'right',
  transition: '0.3s',
};

export const mobileMenuCSS: CSSProperties = {
  background: colorPalette.header.dark,
  height: '100vh',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: '0.3s',
};

export const mobileNavItemsCSS: CSSProperties = {
  background: colorPalette.default.white,
  borderRadius: '10px',
  display: 'block',
  left: '15px',
  listStyle: 'none',
  overflowY: 'auto',
  padding: '10px 0',
  position: 'absolute',
  right: '15px',
  top: '55px',
  transition: '0.3s',
};

export const menuIconCSS: CSSProperties = {
  cursor: 'pointer',
};

export const closeIconCSS: CSSProperties = {
  cursor: 'pointer',
  textAlign: 'right',
  padding: '12px 6px',
};

export const scrollToTopCSS = (isScrolledDown: boolean): CSSProperties => ({
  visibility: isScrolledDown ? 'visible' : 'hidden',
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  backgroundColor: colorPalette.action.active,
  opacity: isScrolledDown ? 1 : 0,
  transition: 'all 1s linear',
  minWidth: '44px',
  minHeight: '44px',
  maxWidth: '44px',
  maxHeight: '44px',
  padding: '10px',
  textAlign: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
});
