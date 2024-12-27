import styled from 'styled-components';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 40px;
  color: ${props => props.theme.colors.white};

  h1 {
    font-size: calc(1rem + 8vw);
    line-height: 1;
    font-family: ${props => props.theme.fonts.title};
    margin-bottom: 20px;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    opacity: 0.7;
  }
`;

const AboutHero = () => {
  useEffect(() => {
    gsap.from('.hero-title span', {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.5
    });

    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.7
    });
  }, []);

  return (
    <HeroSection>
      <HeroBackground>
        <img src="http://clapat.ro/themes/montoya/images/03hero.jpg" alt="About Hero" />
      </HeroBackground>
      <HeroContent>
        <h1 className="hero-title"><span>Our Studio</span></h1>
        <div className="hero-subtitle">
          WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND DEVELOPMENT.
        </div>
      </HeroContent>
    </HeroSection>
  );
};

export default AboutHero;