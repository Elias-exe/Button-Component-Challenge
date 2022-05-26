import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ButtonLine({
  children,
}) {
  return (
    <Container>
      {children}
    </Container>
  );
}

ButtonLine.propTypes = {
  children: PropTypes.node.isRequired,
};
