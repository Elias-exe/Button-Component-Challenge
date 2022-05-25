import PropTypes from 'prop-types';
import { ButtonStyle } from './styles';

export default function Button({
  color, textColor, hoverColor, hasBorder, hasShadow,
}) {
  return (
    <ButtonStyle
      color={color}
      textColor={textColor}
      hoverColor={hoverColor}
      hasBorder={hasBorder}
      hasShadow={hasShadow}
    >
      Default
    </ButtonStyle>
  );
}

Button.propTypes = {
  color: PropTypes.func,
  hoverColor: PropTypes.func,
  textColor: PropTypes.func,
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

Button.defaultProps = {
  color: null,
  textColor: null,
  hoverColor: null,
  hasBorder: false,
  hasShadow: false,
};
