import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ButtonLine({
  children, width,
}) {
  return (
    <Container width={width}>
      {children}
    </Container>
  );
}

ButtonLine.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

ButtonLine.defaultProps = {
  width: 500,
};
