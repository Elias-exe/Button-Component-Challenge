/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import Button from '../Button';
import HoverButton from '../HoverButton';
import { Container } from './styles';

export default function ButtonGroup({
  title,
  color,
  textColor,
  hoverColor,
  hasBorder,
  hasShadow,
  disableHoverButton,
  disabled,
  titleHover,
  startIcon,
  endIcon,
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
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
        />
      </div>

      {!disableHoverButton && (
      <div className="descButton">
        <span> {titleHover} </span>
        <HoverButton
          hoverColor={hoverColor}
          textColor={textColor}
          hasBorder={hasBorder}
          hasShadow={hasShadow}
          disabled={disabled}
        />
      </div>
      )}

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
  disableHoverButton: PropTypes.bool,
  disabled: PropTypes.bool,
  titleHover: PropTypes.string,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  title: null,
  hoverColor: null,
  hasBorder: false,
  hasShadow: false,
  disableHoverButton: false,
  disabled: false,
  titleHover: '&:hover, &:focus',
  startIcon: false,
  endIcon: false,
};
