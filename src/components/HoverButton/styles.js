import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    font-family: 'Ubuntu Mono', monospace;
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const HoverStyle = styled.button`
  width: 81px;
  height: 36px;
  background-color: ${({ hoverColor }) => hoverColor};
  box-shadow: ${({ hasShadow }) => (hasShadow ? '0px 2px 3px rgba(51, 51, 51, 0.2);' : 'none')};
  border-radius: 6px;
  border: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.blue.primary}` : 'none')};
  color: ${({ textColor }) => textColor};
  cursor: default;

  &[disabled]{
    background-color: transparent;
    color: #9E9E9E;
    cursor: default;
  }
`;
