import PropTypes from 'prop-types';
import { FaRocket } from 'react-icons/fa';
import { ButtonStyle, Container } from './styles';

export default function Button({
  color,
  textColor,
  hoverColor,
  hasBorder,
  hasShadow,
  disabled,
  startIcon,
  endIcon,
  title,
  size,
  buttonText,
}) {
  return (
    <Container>
      <span>{title}</span>
      <ButtonStyle
        color={color}
        textColor={textColor}
        hoverColor={hoverColor}
        hasBorder={hasBorder}
        hasShadow={hasShadow}
        disabled={disabled}
        size={size}
      >
        {startIcon && (
        <FaRocket />
        )}
        {buttonText}
        {endIcon && (
        <FaRocket />
        )}
      </ButtonStyle>
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.func,
  hoverColor: PropTypes.func,
  textColor: PropTypes.func,
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
  size: PropTypes.string,
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  title: 'Default',
  color: null,
  textColor: null,
  hoverColor: null,
  hasBorder: false,
  hasShadow: false,
  disabled: false,
  startIcon: false,
  endIcon: false,
  size: 'md',
  buttonText: 'Default',
};
