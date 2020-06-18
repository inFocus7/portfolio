import PropTypes from "prop-types";
import React, { FunctionComponent } from "react";
import { AppIcon } from "../functions/globalFunctions";
import ThemeContext from "../context/theme-context";
import styles from "./styles/header";
import { useDocumentScrollThrottled } from "../functions/globalFunctions";
import { Link } from "react-scroll";

/**
 * The header navigation component containing scrolling implementation.
 *
 * @returns { FunctionComponent }
 * @author {Fabian Gonzalez}
 */
const Header: FunctionComponent = () => {
  const theme = React.useContext(ThemeContext);
  const [showHeader, setShowHeader] = React.useState(true);
  const [showShadow, setShowShadow] = React.useState(false);
  const { HeaderWrapper, LogoContainer, Refs } = { ...styles };
  const MIN_SCROLL: number = 65,
    DELAY: number = 200;

  useDocumentScrollThrottled(
    (callbackData: { prevScrollTop: number; currScrollTop: number }) => {
      const { prevScrollTop, currScrollTop } = callbackData;
      const isScrolledDown = prevScrollTop < currScrollTop;
      const isMinScrolled = currScrollTop > MIN_SCROLL;

      setShowShadow(currScrollTop > 2);

      setTimeout(() => {
        setShowHeader((!isScrolledDown && isMinScrolled) || currScrollTop < 60);
      }, DELAY);
    }
  );

  const shadowStyle = showShadow ? "shadow" : "";
  const hiddenStyle = showHeader ? "" : "hidden";

  return (
    <HeaderWrapper theme={theme}>
      <header className={`header ${hiddenStyle} ${shadowStyle}`}>
        <LogoContainer>
          <Link to="hero" smooth={true} duration={500} activeClass="active">
            <img src={AppIcon.url} />
          </Link>
        </LogoContainer>
        <Refs>
          <Link to="about" smooth={true} duration={500} activeClass="active">
            <li>about</li>
          </Link>
          <Link to="work" smooth={true} duration={500} activeClass="active">
            <li>work</li>
          </Link>
          <Link to="projects" smooth={true} duration={500} activeClass="active">
            <li>projects</li>
          </Link>
          <Link to="fun" smooth={true} duration={500} activeClass="active">
            <li>fun</li>
          </Link>
        </Refs>
      </header>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
