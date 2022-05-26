import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;

  
    span{
    font-family: 'Ubuntu Mono', monospace;
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 12px;
    margin-bottom: 12px;
  }
  
`;

export const ButtonStyle = styled.button`
  width: 81px;
  height: 36px;
  background-color: ${({ color }) => color};
  box-shadow: ${({ hasShadow }) => (hasShadow ? '0px 2px 3px rgba(51, 51, 51, 0.2);' : 'none')};
  border-radius: 6px;
  border: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.blue.primary}` : 'none')};
  color: ${({ textColor }) => textColor};
  transition: 0.2s ease-in all;

  &:hover{
    background-color: ${({ hoverColor }) => hoverColor};
  }

  &[disabled]{
    cursor: default;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: #9E9E9E;
  }

  
`;
