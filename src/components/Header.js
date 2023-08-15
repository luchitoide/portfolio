import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const AnimatedTitle = styled.h1`
  font-size: 3rem;
  animation: bounce 1.5s ease infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @media (max-width: 665px) {
    font-size: 2rem; 
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <AnimatedTitle>¡Bienvenido a mi Portafolio!</AnimatedTitle>
    </StyledHeader>
  );
};

export default Header;