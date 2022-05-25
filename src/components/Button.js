import styled from 'styled-components';

export default styled.button`
  width: 81px;
  height: 36px;
  background-color: ${({ color1 }) => color1};
  background-color: ${({ color2 }) => color2};
  font-family: 'Noto Sans', sans-serif;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  border: none;
`;
