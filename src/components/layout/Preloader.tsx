import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useLoading } from '../../hooks';

const PreloaderWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #000;
  z-index: 1800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingBar = styled.div`
  width: 0%;
  height: 2px;
  background: #fff;
  transition: width 0.3s ease-out;
`;

const Percentage = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease-out;
`;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (!isLoading) return;

    const tl = gsap.timeline();
    let loadingProgress = 0;

    const interval = setInterval(() => {
      loadingProgress += Math.random() * 10;
      if (loadingProgress > 100) {
        loadingProgress = 100;
        clearInterval(interval);
        
        tl.to('.preloader-wrap', {
          duration: 0.7,
          opacity: 0,
          onComplete: () => setIsLoading(false)
        });
      }
      setProgress(Math.min(loadingProgress, 100));
    }, 150);

    return () => clearInterval(interval);
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <PreloaderWrap className="preloader-wrap">
      <div>
        <LoadingBar style={{ width: `${progress}%` }} />
        <Percentage visible={progress > 0}>
          {Math.round(progress)}%
        </Percentage>
      </div>
    </PreloaderWrap>
  );
};

export default Preloader;