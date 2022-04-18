import { CSSProperties, useCallback, useState } from 'react';
import { Link } from 'react-scroll';
import { content } from '../../fixtures';
import { colorPalette } from '../../theme/colorPalette';
import {
  languagePickerCSS,
  navItemCSS,
  navItemsCSS,
  navLinkCSS,
} from './style';
import { HOME_ELEMENT_ID } from '../../constants';
import { scrollTo, scrollToTop } from '../../utils/scroll';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/config';
import { GlobeIcon } from '../../icons/GlobeIcon';

type Props = {
  focusId: string | null | undefined;
  setFocusId: (id: string | null | undefined) => void;
  hoverId: string | null | undefined;
  setHoverId: (id: string | null | undefined) => void;
  navItemsStyle?: CSSProperties;
  navItemStyle?: CSSProperties;
  linksColor?: string;
  closeMobileMenu?: () => void;
};

const Menu: React.FC<Props> = ({
  focusId,
  setFocusId,
  hoverId,
  setHoverId,
  navItemsStyle = navItemsCSS,
  navItemStyle = navItemCSS,
  linksColor = colorPalette.default.white,
  closeMobileMenu,
}) => {
  const { t } = useTranslation('content');

  const isHovered = (id: string) => id === hoverId;
  const isFocused = (id: string) => id === focusId;

  const handleScroll = useCallback(
    (id: string) => {
      setFocusId(id);
      if (!!closeMobileMenu) closeMobileMenu();
      if (id === HOME_ELEMENT_ID) {
        scrollToTop();
      } else {
        scrollTo(id);
      }
    },
    [closeMobileMenu, setFocusId]
  );

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ul style={navItemsStyle}>
      {content.navItems.map((navItem) => (
        <li key={navItem} style={navItemStyle}>
          <Link to={navItem} offset={-60}>
            <span
              onClick={() => handleScroll(navItem)}
              onMouseOver={() => setHoverId(navItem)}
              onMouseOut={() => setHoverId(isFocused(navItem) ? hoverId : null)}
              style={navLinkCSS(
                isHovered(navItem),
                isFocused(navItem),
                linksColor
              )}
            >
              {t(`navbar.${navItem}`)}
            </span>
          </Link>
        </li>
      ))}
      <li style={navLinkCSS(false, false, linksColor)}>
        <span>
          <GlobeIcon color={linksColor} />
          {content.languages.map((language) => (
            <span
              onClick={() => handleLanguageChange(language)}
              style={languagePickerCSS(i18n.language === language, linksColor)}
            >
              {language}
            </span>
          ))}
        </span>
      </li>
    </ul>
  );
};

export default Menu;
