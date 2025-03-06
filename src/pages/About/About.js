import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../UIcomponents/Button';
import { useNavigate } from 'react-router-dom';

const slideFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideFromRight = keyframes`
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideFromBottom = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 10%;
  gap: 50px;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;

  @media (max-width: 800px) {
    padding: 5%;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 2%;
    gap: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  gap: 10px;
  animation: ${slideFromBottom} 1s ease-out forwards;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  animation: ${slideFromLeft} 1s ease-out forwards;
`;

const AboutTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  color: #c5c6c9;

  @media (max-width: 800px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #c5c6c9;
  max-width: 600px;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${slideFromRight} 1s ease-out forwards;

  @media (max-width: 800px) {
    width: 300px;
    height: 450px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  position: absolute;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  display: ${(props) => (props.isLoaded ? 'block' : 'none')};

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.6);
    opacity: 0.9;
  }
`;

function About() {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  return (
    <AboutContainer>
      {/* <ButtonContainer justify='flex-end'>
      </ButtonContainer> */}
      <ContentContainer>
        <TextContainer>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            I'm a frontend developer from Belgrade, Serbia, and I've been into
            web development since 2019. I'm super passionate about it and always
            eager to learn something new every day. While my main focus is on
            frontend development—since I'm more of a visual type—I'm also
            interested in exploring other areas of development. I like to follow
            the philosophy:
            <strong> "Don't be a framework user, be an engineer."</strong>
            <br />
            <br />
            Aside from coding, I'm also really passionate about outdoor
            activities. I've been into rock climbing and mountaineering for 15
            years, and I love sports like skiing. Being in nature is something
            that truly inspires and motivates me!
          </AboutText>
        </TextContainer>
        <ImageContainer>
          {isLoading && <LoadingSpinner />}
          <ProfileImage
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt='Profile'
            onLoad={() => setIsLoading(false)}
            isLoaded={!isLoading}
          />
        </ImageContainer>
      </ContentContainer>
      <ButtonContainer>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
        <Button onClick={() => navigate('/career')}>Career Page</Button>
      </ButtonContainer>
    </AboutContainer>
  );
}

export default About;
