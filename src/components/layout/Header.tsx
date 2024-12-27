import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuBurger from '../navigation/MenuBurger';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 120px;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

const HeaderContainer = styled.div`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  img {
    height: 50px;
    transition: opacity 0.2s ease-in-out;
    
    &.black-logo {
      opacity: ${props => props.theme.isDark ? 0 : 1};
    }
    
    &.white-logo {
      position: absolute;
      opacity: ${props => props.theme.isDark ? 1 : 0};
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper className={isScrolled ? 'scrolled' : ''}>
      <HeaderContainer>
        <Logo to="/">
          <img className="black-logo" src="/images/logo.png" alt="Logo" />
          <img className="white-logo" src="/images/logo-white.png" alt="Logo" />
        </Logo>
        <MenuBurger />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;