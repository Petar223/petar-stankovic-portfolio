import React from 'react';
import styled, { keyframes } from 'styled-components';
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import ProfessionalExperience from '../../components/ProfessionalExperience/ProfessionalExperience';
import PersonalProjects from '../../components/PersonalProjects/PersonalProjects';
import Education from '../../components/Education/Education';
import Button from '../../UIcomponents/Button';
import { useNavigate } from 'react-router-dom';
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

  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
    gap: 15px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  gap: 10px;
  animation: ${slideFromTop} 0.5s ease-out forwards;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;
function Career() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ButtonContainer>
        <Button onClick={() => navigate('/about')}>About Me</Button>
      </ButtonContainer>
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
          <PersonalProjects projects={data.personal_projects} />
        </SectionWrapper>
        <SectionWrapper>
          <ProfessionalExperience experience={data.professional_experience} />
        </SectionWrapper>
      </BottomSectionContainer>
    </PageContainer>
  );
}

export default Career;
