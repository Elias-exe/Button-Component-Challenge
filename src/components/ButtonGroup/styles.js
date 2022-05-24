import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 330px;

  span{
    font-family: 'Ubuntu Mono', monospace;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  .buttonLayer{
    display: flex;
    justify-content: space-between;
  }
`;
