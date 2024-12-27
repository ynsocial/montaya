import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Card = styled.div`
  position: relative;
  width: calc(33.3333% - 80px);
  height: 18vw;
  margin: 60px 40px 120px 40px;
  box-sizing: border-box;
  z-index: 10;
  display: block;

  @media only screen and (max-width: 1466px) {
    width: calc(33.3333% - 60px);
    margin: 60px 30px 120px 30px;
  }

  @media only screen and (max-width: 767px) {
    width: calc(100% - 30px);
    height: 55vw;
    margin: 30px 15px 60px 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  -webkit-transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out;

  &:hover {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  height: calc(100% + 50px);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.3s ease-out;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const ProjectCategory = styled.span`
  font-size: 14px;
  line-height: 32px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  opacity: 0.4;
`;

interface Props {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

const ProjectCard = ({ title, category, image, onClick }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Montoya's original hover animation
    const tl = gsap.timeline({ paused: true });
    
    tl.to(cardRef.current.querySelector('.project-info'), {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });

    cardRef.current.addEventListener('mouseenter', () => tl.play());
    cardRef.current.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Card ref={cardRef} onClick={onClick}>
      <ImageWrapper>
        <ProjectImage src={image} alt={title} />
      </ImageWrapper>
      <ProjectInfo className="project-info">
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectCategory>{category}</ProjectCategory>
      </ProjectInfo>
    </Card>
  );
};

export default ProjectCard;