import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';


const Header = ({ title, ...extraProps }) => (
  <header
    role="banner"
    className={styles.root}
    {...extraProps}
  >
    <h1 className={styles.title}>
      {title}
    </h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
