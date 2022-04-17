import { CSSProperties, useCallback } from 'react';
import { Link } from 'react-scroll';
import { content } from '../../fixtures';
import { colorPalette } from '../../theme/colorPalette';
import { navItemCSS, navItemsCSS, navLinkCSS } from './style';
import { HOME_ELEMENT_ID } from '../../constants';
import { scrollTo, scrollToTop } from '../../utils/scroll';
import { useTranslation } from 'react-i18next';

type Props = {
  focusId: string | null | undefined;
  setFocusId: (id: string | null | undefined) => void;
  hoverId: string | null | undefined;
  setHoverId: (id: string | null | undefined) => void;
  navItemsStyle?: CSSProperties;
  navItemStyle?: CSSProperties;
  linksColor?: string;
};

const Menu = ({
  focusId,
  setFocusId,
  hoverId,
  setHoverId,
  navItemsStyle = navItemsCSS,
  navItemStyle = navItemCSS,
  linksColor = colorPalette.default.white,
}: Props) => {
  const { t } = useTranslation(['content']);

  const isHovered = (id: string) => id === hoverId;
  const isFocused = (id: string) => id === focusId;

  const handleScroll = useCallback(
    (id: string) => {
      setFocusId(id);
      if (id === HOME_ELEMENT_ID) {
        scrollToTop();
      } else {
        scrollTo(id);
      }
    },
    [setFocusId]
  );

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
              {t(`content:navbar.${navItem}`)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
