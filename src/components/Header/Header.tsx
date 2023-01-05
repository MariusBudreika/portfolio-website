import Navigation from 'components/Navigation';
import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <Navigation />
    </header>
  );
};

export default Header;
