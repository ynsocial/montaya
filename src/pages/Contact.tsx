import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </ContactWrapper>
  );
};

export default Contact;