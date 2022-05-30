import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 45px;
`;
