export const data = {
  personal_information: {
    name: 'Petar Stanković',
    email: 'stankovicpetar23@gmail.com',
    mobile: '+381692225657',
    location: 'Belgrade, Serbia',
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
            'Built a admin panel feature in React.js to manage custom keyword groups, including a table and add-keyword form, while implementing API-based role management and normalizing data for mockup pages.',
            'Collaborated closely with an external development company responsible for business logic to align project requirements etc.',
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
            'Responsible for development of key pages (targeting, summary, login and register); collaborated with designer in Figma, and independently redesigned with Material Design to enhance user experience.',
            'Improved large dataset table performance, added search features based on ad operators feedback, and conducted end-to-end tests with Cypress for quality assurance.',
          ],
        },
        {
          name: 'Market Crawler (Internal project)',
          duration: 'April 2021 – September 2023',
          description:
            'A platform aimed to add specific URLs, test their validity and reliability, and collect certain data from these pages.',
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
          description:
            'A platform for managing internet advertising campaigns, enabling ad operators to create banners and placeholders, launch campaigns, and track metrics.',
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
            'Enhanced layout for improved visibility and user experience, adding functionalities like forms and bulk edit options to streamline ad operators tasks.',
            'Developed an expandable banner with vanilla JS, integrating it with an editing wizard for customizable content, and wrote tests for all new features.',
          ],
        },
      ],
    },
  ],
  personal_projects: [
    {
      company: null,
      location: null,
      duration: null,
      roles: null,
      projects: [
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
          link: 'https://master.d3b4iv7p0rq0yz.amplifyapp.com/',
          duration: 'October 2024 – ongoing',
          description:
            'Frontend development for a platform automating contract generation.',
          technologies: ['React.js', 'styled-components', 'Axios', 'Webpack'],
          responsibilities: [
            'Developed frontend side of a platform that automates contract generation, enabling faster and more efficient completion of various contract types, saving time and increase productivity. Made pilot project in cooperation with backend engineer.',
          ],
        },
      ],
    },
  ],
  education: [
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
    {
      degree: 'Graduated Civil Engineer of Professional Studies',
      institution:
        'The University of Belgrade, College of Civil Engineering and Geodesy',
      graduation_year: 2017,
    },
  ],
  portfolio: [
    'https://master.d3b4iv7p0rq0yz.amplifyapp.com/',
    'https://github.com/Petar223',
  ],
};
