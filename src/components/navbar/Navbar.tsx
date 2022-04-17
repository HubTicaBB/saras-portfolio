import { useEffect, useState } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';
import { colorPalette } from '../../theme/colorPalette';
import Menu from './Menu';
import MobileNavbar from './MobileNavbar';
import { headerCSS, navbarCSS, scrollToTopCSS } from './style';
import { HOME_ELEMENT_ID } from '../../constants';
import { scrollToTop } from '../../utils/scroll';

const Navbar: React.FC = () => {
  const [scrollY, setScrolledY] = useState(0);
  const [focusId, setFocusId] = useState<string | null | undefined>(
    HOME_ELEMENT_ID
  );
  const [hoverId, setHoverId] = useState<string | null | undefined>();

  const { screenL, screenHeight } = useScreenSize();

  const scrollToTopAndFocusHome = () => {
    scrollToTop();
    setFocusId(HOME_ELEMENT_ID);
    setHoverId(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolledY(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  return (
    <header style={headerCSS(scrollY > screenHeight - 160)}>
      <nav style={navbarCSS}>
        {screenL ? (
          <Menu
            focusId={focusId}
            setFocusId={setFocusId}
            hoverId={hoverId}
            setHoverId={setHoverId}
          />
        ) : (
          <MobileNavbar
            focusId={focusId}
            setFocusId={setFocusId}
            hoverId={hoverId}
            setHoverId={setHoverId}
          />
        )}
      </nav>
      <div
        onClick={() => scrollToTopAndFocusHome()}
        style={scrollToTopCSS(scrollY > screenHeight - 160)}
      >
        <ArrowUpIcon color={colorPalette.default.white} />
      </div>
    </header>
  );
};

export default Navbar;
