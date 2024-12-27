import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  min-height: 120px;
  resize: none;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 15px 40px;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.from(formRef.current?.elements, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      delay: 0.5
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormGroup>
        <Input type="text" placeholder="What's Your Name" required />
      </FormGroup>
      <FormGroup>
        <Input type="email" placeholder="Your Email" required />
      </FormGroup>
      <FormGroup>
        <Textarea placeholder="Tell Us About Your Project" required></Textarea>
      </FormGroup>
      <SubmitButton type="submit">Send Message</SubmitButton>
    </Form>
  );
};

export default ContactForm;