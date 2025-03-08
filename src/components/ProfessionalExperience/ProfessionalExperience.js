import React from 'react';
import styled from 'styled-components';
import Title from '../../UIcomponents/Title';
import ProjectsList from '../ProjectList/ProjectList';

const Section = styled.section``;

const ProfessionalExperience = ({ experience }) => {
  return (
    <Section>
      <Title>Professional Experience</Title>
      <ProjectsList
        data={experience}
        title='Professional Experience'
        showCompany={true}
        showRoles={true}
      />
    </Section>
  );
};

export default ProfessionalExperience;
