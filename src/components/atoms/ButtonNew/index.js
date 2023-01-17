import "./styles.scss"
import clsx from "clsx";
import PropTypes from "prop-types";

const ButtonNew = ({ className, onClick, variant, color, children, ...props}) => {
  
  return (
    <button
      onClick={onClick}
      className={clsx('zn-button', variant && `zn-button-${variant}`, color && `zn-button-color-${color}`, className)}
      {...props}
      >
      {children}
    </button>
  )
}

ButtonNew.defaultProps = {
  variant: 'filled',
  color: 'primary'
}

ButtonNew.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf(['primary', 'auto']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default ButtonNew;