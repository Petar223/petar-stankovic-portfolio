import React from 'react';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonWrapper = styled.div`
  padding: 20px;
`;

const SkeletonBox = styled.div`
  height: ${(props) => props.height || '16px'};
  width: ${(props) => props.width || '100%'};
  border-radius: 6px;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #2b2c2e 25%, #3a3b3d 50%, #2b2c2e 75%);
  background-size: 200px 100%;
  animation: ${shine} 1.2s ease-in-out infinite;
`;

const ChipRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const ChipSkeleton = styled(SkeletonBox)`
  width: 60px;
  height: 20px;
`;

const BulletRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BulletSkeleton = styled(SkeletonBox)`
  width: 90%;
  height: 14px;
`;

const SkeletonProject = () => (
  <SkeletonWrapper>
    <SkeletonBox width='60%' height='20px' />
    <SkeletonBox width='30%' height='14px' />
    <SkeletonBox width='100%' height='16px' />
    <SkeletonBox width='80%' height='16px' />
    <ChipRow>
      {[...Array(5)].map((_, i) => (
        <ChipSkeleton key={i} />
      ))}
    </ChipRow>
    <BulletRow>
      {[...Array(3)].map((_, i) => (
        <BulletSkeleton key={i} />
      ))}
    </BulletRow>
  </SkeletonWrapper>
);

export default SkeletonProject;
