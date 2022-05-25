import styled from 'styled-components';

export const HoverStyle = styled.button`
  width: 81px;
  height: 36px;
  background-color: ${({ hoverColor }) => hoverColor};
  box-shadow: ${({ hasShadow }) => (hasShadow ? '0px 2px 3px rgba(51, 51, 51, 0.2);' : 'none')};
  border-radius: 6px;
  border: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.blue.primary}` : 'none')};
  color: ${({ textColor }) => textColor};
`;
