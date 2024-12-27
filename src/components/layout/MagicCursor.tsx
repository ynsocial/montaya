import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Cursor = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  pointer-events: none;
  z-index: 10000;
  
  &.hidden {
    opacity: 0;
  }
`;

const Ball = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  border: 2px solid #999999;
  border-radius: 50%;
  pointer-events: none;
  opacity: 1;
  transform: scale(0.5);
  transition: transform 0.3s ease-out;
  
  &.hover {
    transform: scale(1.2);
    border-color: ${props => props.theme.colors.primary};
  }
  
  &.drag {
    transform: scale(1.5);
    border-color: ${props => props.theme.colors.white};
  }
`;

const BallLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const DragText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  opacity: 0;
  transition: opacity 0.3s ease;
  
  .drag & {
    opacity: 1;
  }
`;

const MagicCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ball = ballRef.current;
    
    if (!cursor || !ball) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        duration: 0.5,
        x: e.clientX - 15,
        y: e.clientY - 15,
        ease: "power3.out"
      });
      
      gsap.to(ball, {
        duration: 1,
        x: e.clientX - 40,
        y: e.clientY - 40,
        ease: "power3.out"
      });
    };

    const onMouseDown = () => {
      ball.classList.add('drag');
    };

    const onMouseUp = () => {
      ball.classList.remove('drag');
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.classList.contains('link')) {
        ball.classList.add('hover');
      }
    };

    const onMouseLeave = () => {
      ball.classList.remove('hover');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    const links = document.querySelectorAll('a, .link');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <Cursor ref={cursorRef} id="magic-cursor">
      <Ball ref={ballRef} id="ball">
        <BallLoader id="ball-loader" />
        <DragText>Drag</DragText>
      </Ball>
    </Cursor>
  );
};

export default MagicCursor;