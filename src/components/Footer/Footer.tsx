import React from 'react';
import styles from './footer.module.scss';
import wave from '../../assets/images/wave.jpg';
import { Github as GithubSVG } from '../../assets/icons/Github';
import { Email as EmailSVG } from '../../assets/icons/Email';
import { Linkedin as LinkedinSVG } from '../../assets/icons/Linkedin';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={wave} alt="wave" className={styles.footerWave} />
      <div className={styles.footerInfo}>
        <div>
          <p className={styles.footerSocialtext}>My social media links:</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marius-b-618a55220/"
            className={styles.footerSocialGit}
            rel="noreferrer"
          >
            <LinkedinSVG />
          </a>
          <a
            target="_blank"
            href="https://github.com/MariusBudreika"
            className={styles.footerEmail}
            rel="noreferrer"
          >
            <EmailSVG />
          </a>
        </div>
        <div>
          <p>More projects I&apos;ve worked on:</p>
          <div className={styles.a}>
            <a
              target="_blank"
              href="https://github.com/MariusBudreika"
              className={styles.footerGit}
              rel="noreferrer"
            >
              <GithubSVG />
            </a>
            <a
              className={styles.footerGithubLink}
              target="_blank"
              href="https://github.com/MariusBudreika"
              rel="noreferrer"
            >
              @marius-budreika
            </a>
            &nbsp;on github
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
