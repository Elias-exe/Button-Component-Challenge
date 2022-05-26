import PropTypes from 'prop-types';
import { HoverStyle, Container } from './styles';

export default function HoverButton({
  hoverColor, textColor, hasBorder, hasShadow, disabled, title,
}) {
  return (
    <Container>
      <span>{title}</span>
      <HoverStyle
        hoverColor={hoverColor}
        textColor={textColor}
        hasBorder={hasBorder}
        hasShadow={hasShadow}
        disabled={disabled}
      >
        Default
      </HoverStyle>
    </Container>
  );
}

HoverButton.propTypes = {
  title: PropTypes.string,
  hoverColor: PropTypes.func,
  textColor: PropTypes.func,
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
  disabled: PropTypes.bool,
};

HoverButton.defaultProps = {
  title: '&:hover, &:focus',
  hoverColor: null,
  textColor: null,
  hasBorder: false,
  hasShadow: false,
  disabled: false,
};
