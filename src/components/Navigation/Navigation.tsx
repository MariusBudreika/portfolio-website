import React from 'react';
import styles from './navigation.module.scss';
import { Gear as GearSVG } from '../../assets/icons/Gear';

const Navigation: React.FC = () => {
  const handleClickScroll = (id: string): void => {
    const element = document.getElementById(id);

    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <nav className={styles.navigation}>
      <div>
        <button onClick={() => handleClickScroll('about')}>about</button>
        <button onClick={() => handleClickScroll('projects')}>
          <GearSVG />
          <span className={styles.project}>projects</span>
        </button>
        <button onClick={() => handleClickScroll('contactMe')}>
          contact me
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
