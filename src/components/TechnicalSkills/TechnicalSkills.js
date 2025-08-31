import React from 'react';
import styled from 'styled-components';
import Title from '../../UIcomponents/Title';
import { skillIcons } from '../constants/constants';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  svg {
    width: 50px;
    height: 50px;
    fill: #c5c6c9;
    color: #c5c6c9;
    transition: fill 0.2s ease-in-out;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: -30px;
  background: #c5c6c9;
  color: rgba(4, 3, 54);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const TechnicalSkills = ({ skills }) => {
  return (
    <Section>
      <Title>Technical Skills</Title>
      <IconContainer>
        {skills.map((skill, index) => {
          const IconComponent = skillIcons[skill];
          return (
            <IconWrapper key={index}>
              <Tooltip>{skill}</Tooltip>
              {IconComponent && <IconComponent />}
            </IconWrapper>
          );
        })}
      </IconContainer>
    </Section>
  );
};

export default TechnicalSkills;
