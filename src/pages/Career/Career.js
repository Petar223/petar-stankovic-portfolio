import React from 'react';
import styled, { keyframes } from 'styled-components';
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import ProfessionalExperience from '../../components/ProfessionalExperience/ProfessionalExperience';
import PersonalProjects from '../../components/PersonalProjects/PersonalProjects';
import Education from '../../components/Education/Education';
import { data } from '../../constants/data';

const slideFromTop = keyframes`
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  max-width: 1600px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
    gap: 29px;
  }
`;

const SectionWrapper = styled.section`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  backdrop-filter: blur(1px);
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 18px;
  }
`;

const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  animation: ${slideFromTop} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MiddleSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const LeftSection = styled.div`
  flex: 1;
  animation: ${slideFromLeft} 0.5s ease-out;
`;

const BottomSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  animation: ${slideFromTop} 0.5s ease-out;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

function Career() {
  return (
    <PageContainer>
      <TopSectionContainer>
        <SectionWrapper>
          <PersonalInformation data={data.personal_information} />
        </SectionWrapper>
        <SectionWrapper>
          <Education education={data.education} />
        </SectionWrapper>
      </TopSectionContainer>
      <MiddleSectionContainer>
        <LeftSection>
          <SectionWrapper>
            <TechnicalSkills skills={data.technical_skills} />
          </SectionWrapper>
        </LeftSection>
      </MiddleSectionContainer>
      <BottomSectionContainer>
        <SectionWrapper>
          <ProfessionalExperience experience={data.professional_experience} />
        </SectionWrapper>
        <SectionWrapper>
          <PersonalProjects projects={data.personal_projects} />
        </SectionWrapper>
      </BottomSectionContainer>
    </PageContainer>
  );
}

export default Career;
