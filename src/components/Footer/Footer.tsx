import React from 'react';
import styles from './footer.module.scss';
import wave from '../../assets/images/wave.jpg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={wave} alt="wave" className={styles.footerWave} />
      <div className={styles.footerInfo}>
        <div>
          <p>My social media links:</p>
        </div>
        <div>
          <p>More projects I&apos;ve worked on</p>
          <p>
            <a
              target="_blank"
              href="https://github.com/MariusBudreika"
              rel="noreferrer"
            >
              @marius-budreika
            </a>{' '}
            on github
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
