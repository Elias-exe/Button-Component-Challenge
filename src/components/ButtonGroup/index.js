import PropTypes from 'prop-types';
import Button from '../Button';
import HoverButton from '../HoverButton';
import { Container } from './styles';

export default function ButtonGroup({
  title, color, textColor, hoverColor, hasBorder, hasShadow,
}) {
  return (
    <Container>
      <div className="typeButton">
        <span>{title}</span>
        <Button
          color={color}
          textColor={textColor}
          hoverColor={hoverColor}
          hasBorder={hasBorder}
          hasShadow={hasShadow}
        />
      </div>

      <div className="descButton">
        <span> &:hover, &:focus </span>
        <HoverButton
          hoverColor={hoverColor}
          textColor={textColor}
          hasBorder={hasBorder}
          hasShadow={hasShadow}
        />
      </div>

    </Container>
  );
}

ButtonGroup.propTypes = {
  color: PropTypes.func.isRequired,
  title: PropTypes.string,
  textColor: PropTypes.func.isRequired,
  hoverColor: PropTypes.func,
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  title: null,
  hoverColor: null,
  hasBorder: false,
  hasShadow: false,
};
