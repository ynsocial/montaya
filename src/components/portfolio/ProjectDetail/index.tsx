import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const ProjectWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ProjectHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 80px;
  width: 100%;
  max-width: 1400px;
  
  @media only screen and (max-width: 1024px) {
    padding: 0 40px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: calc(1rem + 8vw);
  line-height: calc(1rem + 7.5vw);
  font-weight: 500;
  color: #fff;
  margin: 0;
`;

const ProjectMeta = styled.div`
  margin-top: 30px;
  color: rgba(255,255,255,0.7);
`;

const ProjectNav = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

interface Props {
  title: string;
  date: string;
  role: string;
  description: string;
  nextProject: {
    title: string;
    image: string;
    link: string;
  };
}

const ProjectDetail = ({ title, date, role, description, nextProject }: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Montoya's original project detail animations
    const tl = gsap.timeline();

    tl.from(heroRef.current.querySelector('.project-title'), {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(heroRef.current.querySelector('.project-meta'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <ProjectWrapper>
      <ProjectHero ref={heroRef}>
        <HeroContent>
          <ProjectTitle className="project-title">{title}</ProjectTitle>
          <ProjectMeta className="project-meta">
            <p>Date: {date}</p>
            <p>Role: {role}</p>
            <p>{description}</p>
          </ProjectMeta>
        </HeroContent>
      </ProjectHero>

      <ProjectNav>
        <Link to={nextProject.link}>
          <h2>{nextProject.title}</h2>
          <img src={nextProject.image} alt={nextProject.title} />
        </Link>
      </ProjectNav>
    </ProjectWrapper>
  );
};

export default ProjectDetail;