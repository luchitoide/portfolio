import React from 'react';
import styled from 'styled-components';

const IntroductionContainer = styled.section`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const IntroductionText = styled.p`
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1rem; 
  }
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <h2 className="text-3xl mb-2">Soy un desarrollador Full Stack...</h2>
      <IntroductionText>
        Con pasión por la creación de soluciones innovadoras y hermosas.
      </IntroductionText>
    </IntroductionContainer>
  );
};

export default Introduction;