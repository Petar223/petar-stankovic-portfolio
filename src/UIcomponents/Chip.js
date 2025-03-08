import styled from 'styled-components';

const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0.1px solid #c5c6c9;
  color: #c5c6c9;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  svg {
    width: 20px;
    height: 20px;
    fill: #c5c6c9;
  }
`;

export default Chip;
