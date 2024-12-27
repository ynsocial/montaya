import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GalleryInner = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  position: relative;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: ${props => props.theme.roundedBorders ? '8px' : '0'};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectCaption = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  pointer-events: none;

  @media only screen and (max-width: 1466px) {
    padding: 60px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px;
  }

  @media only screen and (max-width: 479px) {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: calc(1rem + 8vw);
  line-height: calc(1rem + 7.5vw);
  font-weight: 500;
  overflow: hidden;
  margin: 0;
`;

const ProjectMeta = styled.div`
  position: absolute;
  bottom: 80px;
  padding: 2px 16px;
  background: rgba(255,255,255,0.2);
  border-radius: 35px;
  font-size: 14px;

  @media only screen and (max-width: 1466px) {
    bottom: 60px;
  }

  @media only screen and (max-width: 1024px) {
    bottom: 40px;
  }

  @media only screen and (max-width: 479px) {
    top: 20px;
    bottom: auto;
  }
`;

interface Project {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
}

interface Props {
  projects: Project[];
}

const OverlappingGallery = ({ projects }: Props) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    // Montoya's original gallery animation logic converted to GSAP
    const images = galleryRef.current.querySelectorAll('.project-image');
    
    images.forEach((image, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });

      tl.fromTo(image, 
        { y: index % 2 === 0 ? -100 : 100, scale: 1.1 },
        { y: 0, scale: 1, duration: 1 }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <GalleryWrapper ref={galleryRef}>
      {projects.map((project, index) => (
        <GalleryInner key={project.id} className={`overlapping-image ${index === 0 ? 'first' : ''}`}>
          <ImageWrapper>
            <ProjectImage 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
          </ImageWrapper>
          <ProjectCaption>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectMeta style={{ left: 80 }}>{project.date}</ProjectMeta>
            <ProjectMeta style={{ right: 80 }}>{project.category}</ProjectMeta>
          </ProjectCaption>
        </GalleryInner>
      ))}
    </GalleryWrapper>
  );
};

export default OverlappingGallery;