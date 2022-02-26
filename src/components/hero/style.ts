import { CSSProperties } from 'react';
import hero from "../../assets/hero.jpg";
import { colorPalette } from '../../theme/colorPalette';
import { font } from '../../theme/typography';

export const heroSectionCSS: CSSProperties = {
  background: `linear-gradient(to bottom, rgba(25, 28, 31, 0.8), rgba(25, 28, 31, 0.5)), url(${hero})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center top",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
}

export const herocontainerCSS: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
  padding: "0 15px",
  textAlign: "center"
}

export const titleCSS = (screenL: boolean): CSSProperties => ({
  margin: "0 0 10px 0",
  font: screenL ? font.stylish.stor : font.stylish.mellan,
  color: colorPalette.default.white,
})

export const subtitleCSS = (screenL: boolean): CSSProperties => ({
  margin: `0 0 ${screenL ? "50px" : "30px"} 0`,
  font: font.default.tretton,
  color: colorPalette.default.light,
  letterSpacing: "1px",
  textTransform: "uppercase",
  alignSelf: "center"
})

export const scrollButtonCSS: CSSProperties = {
  cursor: "pointer",
  transition: "0.4s",
  animation: "0% {transform: translateY(5px)} 100% {transform: translateY(-5px)} 1s ease-in-out infinite alternate-reverse both"
}
