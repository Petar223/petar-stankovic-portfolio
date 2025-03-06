import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Icons from '../Icons';

const Section = styled.section`
  display: flex;
  flex-direction: column;
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

const Strong = styled.strong`
  color: #fff;
  font-size: 18px;
`;
const LanguagesStrong = styled.strong`
  color: #c5c6c9;
  font-size: 18px;
`;
const Link = styled.a`
  color: #0077cc;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const List = styled.ul`
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 18px; /* Povećan font */
  color: #c5c6c9;
  margin-bottom: 5px;
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
          <Strong>Email:</Strong>{' '}
          <Link href={`mailto:${data.email}`}>{data.email}</Link>
        </Text>
        <Text>
          <Strong>Mobile:</Strong> {data.mobile}
        </Text>
        <Text>
          <Strong>Location:</Strong> {data.location}
        </Text>
        <Text>
          <Strong>Languages:</Strong>
        </Text>
        <List>
          <ListItem>
            <LanguagesStrong>Native:</LanguagesStrong> {data.languages.native}
          </ListItem>
          <ListItem>
            <LanguagesStrong>Working Proficiency:</LanguagesStrong>{' '}
            {data.languages.working_proficiency}
          </ListItem>
        </List>
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
