import PropTypes from 'prop-types';
import Button from '../Button';
import { Container } from './styles';

export default function ButtonGroup({ color1, color2 }) {
  return (
    <Container>

      <div className="typeButton">
        <span> Button </span>
        <Button color1={color1}>Default</Button>
      </div>

      <div className="descButton">
        <span> &:hover, &:focus </span>
        <Button color2={color2}>Default</Button>
      </div>

    </Container>
  );
}

ButtonGroup.propTypes = {
  color1: PropTypes.func,
  color2: PropTypes.func,
};

ButtonGroup.defaultProps = {
  color1: ({ theme }) => theme.colors.gray[100],
  color2: ({ theme }) => theme.colors.gray[100],
};
