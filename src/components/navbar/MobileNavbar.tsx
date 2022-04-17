import { useState } from 'react';
import { CloseIcon } from '../../icons/CloseIcon';
import { MenuIcon } from '../../icons/MenuIcon';
import { colorPalette } from '../../theme/colorPalette';
import Menu from './Menu';
import {
  closeIconCSS,
  menuIconCSS,
  mobileMenuCSS,
  mobileNavbarCSS,
  mobileNavItemsCSS,
  navItemCSS,
} from './style';

type Props = {
  focusId: string | null | undefined;
  setFocusId: (id: string | null | undefined) => void;
  hoverId: string | null | undefined;
  setHoverId: (id: string | null | undefined) => void;
};

const MobileNavbar: React.FC<Props> = ({
  focusId,
  setFocusId,
  hoverId,
  setHoverId,
}) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <span onClick={() => setNavbarOpen(!navbarOpen)} style={mobileNavbarCSS}>
      {navbarOpen ? (
        <div style={mobileMenuCSS}>
          <div onClick={() => setNavbarOpen(false)} style={closeIconCSS}>
            <CloseIcon color={colorPalette.default.white} />
          </div>
          <Menu
            focusId={focusId}
            setFocusId={setFocusId}
            hoverId={hoverId}
            setHoverId={setHoverId}
            navItemsStyle={mobileNavItemsCSS}
            navItemStyle={navItemCSS}
            linksColor={colorPalette.default.dark}
          />
        </div>
      ) : (
        <div style={menuIconCSS}>
          <MenuIcon color={colorPalette.default.white} />
        </div>
      )}
    </span>
  );
};

export default MobileNavbar;
