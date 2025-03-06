import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Icons from '../Icons'; // Učitava sve ikonice

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #c5c6c9;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #c5c6c9;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const glitchEffect = keyframes`
  0% {
    transform: translate(1px, -1px);
    filter: drop-shadow(2px 2px 4px rgba(255, 0, 0, 0.7)) drop-shadow(-2px -2px 4px rgba(0, 255, 255, 0.7));
  }
  50% {
    transform: translate(-1px, 1px);
    filter: drop-shadow(-2px -2px 4px rgba(255, 0, 0, 0.7)) drop-shadow(2px 2px 4px rgba(0, 255, 255, 0.7));
  }
  100% {
    transform: translate(1px, -1px);
    filter: drop-shadow(2px -2px 4px rgba(255, 0, 0, 0.7)) drop-shadow(-2px 2px 4px rgba(0, 255, 255, 0.7));
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:hover svg {
    animation: ${glitchEffect} 0.5s infinite alternate;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: #c5c6c9;
    transition: fill 0.2s ease-in-out;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

// Glitch animacija

const contactIcons = {
  LinkedIn: Icons.Icons8Linkedin,
  GitHub: Icons.Github,
};

const PersonalInformation = ({ data }) => {
  return (
    <Section>
      <Title>Personal Information</Title>
      <ContentWrapper>
        <Text>
          <strong>Email:</strong> {data.email}
        </Text>
        <Text>
          <strong>Mobile:</strong> {data.mobile}
        </Text>
        <Text>
          <strong>Languages:</strong> Native: {data.languages.native}, Working
          Proficiency: {data.languages.working_proficiency}
        </Text>
        <IconContainer>
          <IconLink href={data.linkedin} target='_blank'>
            {contactIcons.LinkedIn && <contactIcons.LinkedIn />}
          </IconLink>
          <IconLink href={data.github} target='_blank'>
            {contactIcons.GitHub && <contactIcons.GitHub />}
          </IconLink>
        </IconContainer>
      </ContentWrapper>
    </Section>
  );
};

export default PersonalInformation;
