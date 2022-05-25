import PropTypes from 'prop-types';
import { HoverStyle } from './styles';

export default function HoverButton({
  hoverColor, textColor, hasBorder, hasShadow,
}) {
  return (
    <HoverStyle
      hoverColor={hoverColor}
      textColor={textColor}
      hasBorder={hasBorder}
      hasShadow={hasShadow}
    >
      Default

    </HoverStyle>
  );
}

HoverButton.propTypes = {
  hoverColor: PropTypes.func,
  textColor: PropTypes.func,
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

HoverButton.defaultProps = {
  hoverColor: null,
  textColor: null,
  hasBorder: false,
  hasShadow: false,
};
