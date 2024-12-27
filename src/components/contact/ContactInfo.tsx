import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 40px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  text-align: center;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    opacity: 0.7;
  }
`;

const ContactInfo = () => {
  return (
    <InfoWrapper>
      <InfoBox>
        <h3>Email</h3>
        <p>office@montoya.com</p>
      </InfoBox>
      <InfoBox>
        <h3>Address</h3>
        <p>35 M Str, New York, USA</p>
      </InfoBox>
      <InfoBox>
        <h3>Phone</h3>
        <p>0040 (7763) 574-8901</p>
      </InfoBox>
    </InfoWrapper>
  );
};

export default ContactInfo;