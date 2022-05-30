import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ButtonGroup({
  children, width,
}) {
  return (
    <Container width={width}>
      {children}
    </Container>
  );
}

ButtonGroup.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {
  width: 500,
};
