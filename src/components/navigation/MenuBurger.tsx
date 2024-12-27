import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const BurgerWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 100;
`;

const BurgerLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  
  span {
    width: 30px;
    height: 2px;
    background: ${props => props.theme.colors.text};
    transition: all 0.3s ease-in-out;
    
    &:nth-child(1) {
      transform-origin: left;
    }
    
    &:nth-child(3) {
      transform-origin: left;
    }
  }
  
  &.active {
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`;

const MenuText = styled.div`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  span {
    display: block;
    position: relative;
    overflow: hidden;
    
    &:after {
      content: attr(data-hover);
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      transform: translateY(0);
      transition: transform 0.3s ease-out;
    }
  }
  
  &:hover span:after {
    transform: translateY(-100%);
  }
`;

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Montoya's original menu animation
    if (isOpen) {
      gsap.to('.menu-overlay', {
        duration: 0.5,
        opacity: 1,
        visibility: 'visible',
        ease: 'power2.inOut'
      });
    } else {
      gsap.to('.menu-overlay', {
        duration: 0.5,
        opacity: 0,
        visibility: 'hidden',
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <BurgerWrapper onClick={() => setIsOpen(!isOpen)}>
      <BurgerLines className={isOpen ? 'active' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerLines>
      <MenuText>
        <span data-hover="Menu">Menu</span>
      </MenuText>
    </BurgerWrapper>
  );
};

export default MenuBurger;