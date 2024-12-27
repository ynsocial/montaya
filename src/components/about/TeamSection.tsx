import styled from 'styled-components';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamWrapper = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.background};
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamMember = styled.li`
  padding: 30px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(255,255,255,0.02);
  }

  .member-info {
    span {
      opacity: 0.5;
      display: block;
      margin-bottom: 5px;
    }

    .name {
      font-family: ${props => props.theme.fonts.title};
      font-size: 2.5rem;
      opacity: 1;
    }
  }
`;

const teamMembers = [
  {
    since: '2010',
    name: 'Tom Harrison',
    role: 'Web Designer',
    image: 'http://clapat.ro/themes/montoya/images/01hero.jpg'
  },
  {
    since: '2012',
    name: 'Ricky Romano',
    role: 'UX Designer',
    image: 'http://clapat.ro/themes/montoya/images/02hero.jpg'
  },
  {
    since: '2014',
    name: 'Jane Reeves',
    role: 'Art Director',
    image: 'http://clapat.ro/themes/montoya/images/03hero.jpg'
  }
];

const TeamSection = () => {
  useEffect(() => {
    gsap.from('.team-member', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top center+=100',
      }
    });
  }, []);

  return (
    <TeamWrapper className="team-section">
      <TeamList>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} className="team-member">
            <div className="member-info">
              <span>Since {member.since}</span>
              <span className="name">{member.name}</span>
              <span>{member.role}</span>
            </div>
          </TeamMember>
        ))}
      </TeamList>
    </TeamWrapper>
  );
};

export default TeamSection;