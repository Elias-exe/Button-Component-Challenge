import styled from 'styled-components';

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
`;
