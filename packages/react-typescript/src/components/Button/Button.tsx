import * as React from 'react';
import classNames from 'classnames';

interface Props {
  label: string,
  theme?: 'primary' | 'secondary' | 'danger',
  handleClick?: () => void,
}


const Button: React.StatelessComponent<Props> = ({ label, theme, handleClick, ...extraProps }) => (
  <button
    onClick={handleClick}
    {...extraProps}
  >
    {label}
  </button>
);

Button.defaultProps = {
  theme: 'primary',
};


export default Button;
