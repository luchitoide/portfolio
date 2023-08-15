import React from 'react';
import styled from 'styled-components';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';

const ContactContainer = styled.section`
  background-color: #1a202c; /* Fondo oscuro */
  padding: 3rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-family: 'Pacifico', cursive; /* Fuente elegante */
    color: #66c0f4; /* Color del título */
    position: relative;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #66c0f4; /* Color de la línea debajo del título */
  }
`;


const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  img {
    width: 40px;
    height: 40px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Contact = () => {
    return (
      <ContactContainer>
        <h2 className="text-3xl mb-4">¡Contáctame!</h2>
        <SocialIcons>
          <SocialLink href="https://www.linkedin.com/in/luis-ramirez-pardo-544294189/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </SocialLink>
          <SocialLink href="https://github.com/luchitoide" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </SocialLink>
        </SocialIcons>
      </ContactContainer>
    );
  };
  
  export default Contact;