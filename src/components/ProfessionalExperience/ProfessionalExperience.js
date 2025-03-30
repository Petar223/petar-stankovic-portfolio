import React, { Suspense, lazy } from 'react';

import styled from 'styled-components';
import Title from '../../UIcomponents/Title';
import SkeletonProject from '../../UIcomponents/SkeletonProject';


const ProjectsList = lazy(() => import('../ProjectList/ProjectList'));

const Section = styled.section``;

const ProfessionalExperience = ({ experience }) => {
  return (
    <Section>
      <Title>Professional Experience</Title>
      <Suspense fallback={<SkeletonProject count={3} />}>
        <ProjectsList
          data={experience}
          title='Professional Experience'
          showCompany={true}
          showRoles={true}
        />
      </Suspense>
    </Section>
  );
};

export default ProfessionalExperience;
