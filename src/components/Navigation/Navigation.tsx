import React from 'react';
import styles from './navigation.module.scss';
import { Gear as GearSVG } from '../../assets/icons/Gear';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>about</li>
        <li>
          <GearSVG />
          <span className={styles.project}>project</span>
        </li>
        <li>contact me</li>
      </ul>
    </nav>
  );
};

export default Navigation;
