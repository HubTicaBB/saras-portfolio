import { CSSProperties } from 'react';
import { Link } from 'react-scroll';
import { content } from '../../fixtures';
import { colorPalette } from '../../theme/colorPalette';
import { navItemCSS, navItemsCSS, navLinkCSS } from './style';
import { HOME_ELEMENT_ID } from '../../constants';
import { scrollTo, scrollToTop } from '../../utils/scroll';

type Props = {
  focusId: string | null | undefined,
  setFocusId: (id: string | null | undefined) => void,
  hoverId: string | null | undefined,
  setHoverId: (id: string | null | undefined) => void,
  navItemsStyle?: CSSProperties,
  navItemStyle?: CSSProperties,
  linksColor?: string,
}

const Menu = ({
  focusId,
  setFocusId,
  hoverId,
  setHoverId,
  navItemsStyle = navItemsCSS,
  navItemStyle = navItemCSS,
  linksColor = colorPalette.default.white
}: Props) => {
  const isHovered = (id: string) => id === hoverId;
  const isFocused = (id: string) => id === focusId;

  return (
    <ul style={navItemsStyle}>
      {content.navItems.map(({id, cta, href}) => (
        <li key={id} style={navItemStyle}>
          <Link to={id} offset={-60}>
            <span
              onClick={() => {
                setFocusId(id);
                if (id === HOME_ELEMENT_ID) {
                  scrollToTop()
                } else {
                  scrollTo(id)
                };
              }}
              onMouseOver={() => setHoverId(id)}
              onMouseOut={() => setHoverId(isFocused(id) ? hoverId : null)}
              style={navLinkCSS(isHovered(id), isFocused(id), linksColor)}
            >
              {cta}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu;
