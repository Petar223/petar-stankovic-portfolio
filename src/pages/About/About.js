import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../UIcomponents/Button';
import { useNavigate } from 'react-router-dom';

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 0 10%;
  gap: 50px;
  animation: ${pulseAnimation} 1.5s ease-in-out forwards;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  color: #c5c6c9;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #c5c6c9;
  max-width: 600px;
  text-align: left;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
      <ButtonContainer>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </ButtonContainer>
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
    </AboutContainer>
  );
}

export default About;
