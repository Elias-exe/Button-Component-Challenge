import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 330px;
  display: flex;
  justify-content: space-between;

  span{
    font-family: 'Ubuntu Mono', monospace;
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 12px;
    margin-bottom: 12px;
  }

    .typeButton{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .descButton{
    display: flex;
    align-items: center;
    flex-direction: column;

    span{
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`;
