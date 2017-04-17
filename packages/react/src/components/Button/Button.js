/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.css';


const Button = ({ label, theme, handleClick, ...extraProps }) => (
  <button
    className={classNames(styles.root, styles[theme])}
    onClick={handleClick}
    {...extraProps}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  theme: 'primary',
};


export default Button;
