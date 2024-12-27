import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  z-index: 99;
  visibility: hidden;
  opacity: 0;
`;

const MenuWrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const MenuItem = styled.li`
  margin: 20px 0;
  overflow: hidden;
  
  a {
    font-size: 5vw;
    line-height: 1;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    position: relative;
    display: inline-block;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
    
    &:before {
      content: attr(data-hover);
      position: absolute;
      top: 100%;
      transform: translateY(0);
      transition: transform 0.3s ease-out;
    }
    
    &:hover:before {
      transform: translateY(-100%);
    }
  }
`;

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    // Montoya's original menu animation
    const tl = gsap.timeline({ paused: true });
    
    tl.fromTo(menuRef.current.querySelectorAll('.menu-item'), {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out'
    });

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <MenuOverlay className="menu-overlay" ref={menuRef}>
      <MenuWrapper>
        <MenuList>
          <MenuItem className="menu-item">
            <Link to="/" data-hover="Portfolio">Portfolio</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/about" data-hover="About">About</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/contact" data-hover="Contact">Contact</Link>
          </MenuItem>
        </MenuList>
      </MenuWrapper>
    </MenuOverlay>
  );
};

export default Menu;