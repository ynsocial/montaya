import AboutHero from '../components/about/AboutHero';
import TeamSection from '../components/about/TeamSection';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutHero />
      <TeamSection />
    </AboutWrapper>
  );
};

export default About;