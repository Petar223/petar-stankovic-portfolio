import React from 'react';
import styled, { keyframes } from 'styled-components';
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import ProfessionalExperience from '../../components/ProfessionalExperience/ProfessionalExperience';
import PersonalProjects from '../../components/PersonalProjects/PersonalProjects';
import Education from '../../components/Education/Education';
import Button from '../../UIcomponents/Button';
import { useNavigate } from 'react-router-dom';

const data = {
  personal_information: {
    name: 'Petar Stanković',
    email: 'stankovicpetar23@gmail.com',
    mobile: '+381692225657',
    linkedin: 'https://www.linkedin.com/in/petar-stanković/',
    github: 'https://github.com/Petar223',
    languages: {
      native: 'Serbian',
      working_proficiency: 'English',
    },
  },
  technical_skills: [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Angular',
    'React',
    'Redux-Saga',
    'Cypress',
    'JSON',
    'Git',
    'Jira',
    'Tailwind',
    'Docker',
    'Sass',
    'Webpack',
    'styled-components',
    'Axios',
  ],
  professional_experience: [
    {
      company: 'Nano Interactive',
      location: 'Belgrade',
      duration: 'November 2019 – April 2024',
      roles: [
        {
          title: 'Intern',
          start_date: 'November 2019',
          end_date: 'April 2020',
        },
        {
          title: 'Junior Frontend Developer',
          start_date: 'April 2020',
          end_date: 'April 2021',
        },
        {
          title: 'Frontend Developer',
          start_date: 'April 2021',
          end_date: 'April 2024',
        },
      ],
      projects: [
        {
          name: 'Live Intent Identity-Free Targeting (LIIFT) new UI/UX',
          duration: 'April 2023 – May 2024',
          description:
            'Platform for campaign optimization using metrics, contextual data, and consumer insights.',
          technologies: [
            'React.js',
            'Redux-saga',
            'TypeScript',
            'Tailwind',
            'Git',
            'HTML',
            'JavaScript',
          ],
          responsibilities: [
            'Built an admin panel feature in React.js to manage custom keyword groups',
            'Implemented API-based role management and normalized data for mockup pages',
            'Collaborated with an external development company to align project requirements',
          ],
        },
        {
          name: 'Live Intent Identity-Free Targeting (LIIFT)',
          duration: 'April 2021 – September 2023',
          technologies: [
            'Angular 10+',
            'TypeScript',
            'CSS',
            'HTML',
            'Sass',
            'Git',
            'Cypress',
          ],
          responsibilities: [
            'Developed key pages including targeting, summary, login, and register',
            'Redesigned pages with Material Design to enhance user experience',
            'Improved table performance, added search features, and conducted end-to-end tests',
          ],
        },
        {
          name: 'Market Crawler (Internal project)',
          duration: 'April 2021 – September 2023',
          description:
            'Platform to add specific URLs, test their validity, and collect certain data.',
          technologies: [
            'Angular 15',
            'JavaScript',
            'HTML',
            'CSS',
            'Sass',
            'Git',
          ],
        },
        {
          name: 'Audience Manager',
          duration: 'November 2019 – April 2021',
          description: 'Platform for managing internet advertising campaigns.',
          technologies: [
            'TypeScript',
            'CSS',
            'HTML',
            'Angular 4',
            'Sass',
            'Git',
            'Docker',
            'Chai',
          ],
          responsibilities: [
            'Enhanced layout for better user experience',
            'Added functionalities like forms and bulk edit options',
            'Developed an expandable banner with vanilla JS',
          ],
        },
      ],
    },
  ],
  personal_projects: [
    {
      name: 'Cocktail App',
      duration: 'May 2024 – ongoing',
      description:
        'Full-stack cocktail app with separate frontend and backend for recipe management.',
      technologies: [
        'React.js',
        'styled-components',
        'Axios',
        'Node.js',
        'Docker',
        'Amazon EC2',
        'GitHub Actions',
        'Webpack',
        'MongoDB',
      ],
      responsibilities: [
        'Developed a full-stack cocktail app with separate frontend and backend for recipe management, using React, Node, MongoDB, Docker, and styled-components for a responsive interface.',
        'Collaborated with tech stack mentors for feature refinement and advanced technical guidance; also leveraged AWS EC2 instances to learn deployment processes and configured GitHub Actions for automated deployments',
      ],
    },
    {
      name: 'Dokko filler',
      duration: 'October 2024 – ongoing',
      description:
        'Frontend development for a platform automating contract generation.',
      technologies: ['React.js', 'styled-components', 'Axios', 'Webpack'],
      responsibilities: [
        'Developed frontend side of a platform that automates contract generation, enabling faster and more efficient completion of various contract types, saving time and increase productivity. Made pilot project in cooperation with backend engineer.',
      ],
    },
  ],
  education: [
    {
      degree: 'Graduated Civil Engineer of Professional Studies',
      institution:
        'The University of Belgrade, College of Civil Engineering and Geodesy',
      graduation_year: 2017,
    },
    {
      course: 'Frontend Development',
      institution: 'Code Academy, Comtrade Belgrade',
      duration: 'February 2019 – September 2019',
      final_project: {
        name: 'Movie-CLUB',
        description: 'A movie and TV series poster search application',
        technologies: ['HTML5', 'CSS3', 'Vanilla JS (ES5, ES6)'],
        github_link: 'https://github.com/Petar223/Movie-CLUB',
      },
    },
  ],
  portfolio: [
    'https://master.d3b4iv7p0rq0yz.amplifyapp.com/',
    'https://github.com/Petar223',
  ],
};

// Animacije
const slideFromTop = keyframes`
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideFromBottom = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
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
  animation: ${slideFromBottom} 0.5s ease-out;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  gap: 10px;
  animation: ${slideFromBottom} 1s ease-out forwards;

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
      <ButtonContainer>
        <Button onClick={() => navigate('/about')}>About Page</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Career;
