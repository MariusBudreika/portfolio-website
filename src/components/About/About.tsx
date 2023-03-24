import React from 'react';
import styles from './about.module.scss';
import myPhoto from '../../assets/images/myPhoto.jpg';
import { Zigzag as ZigzagSVG } from '../../assets/icons/Zigzag';
import { Plus as PlusSVG } from '../../assets/icons/Plus';
import { Ellipse as EllipseSVG } from '../../assets/icons/Ellipse';
import { Cube as CubeSVG } from '../../assets/icons/Cube';
import { Circles as CirclesSVG } from '../../assets/icons/Circles';

const About: React.FC = () => {
  const svgs = [
    {
      id: 1,
      component: <ZigzagSVG />,
      className: styles.aboutZigzag
    },
    {
      id: 2,
      component: <PlusSVG />,
      className: styles.aboutPlus
    },
    {
      id: 3,
      component: <EllipseSVG />,
      className: styles.aboutEllipse
    },
    {
      id: 4,
      component: <CubeSVG />,
      className: styles.aboutCube
    },
    {
      id: 5,
      component: <CirclesSVG />,
      className: styles.aboutCircles
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutText}>
        <h3 className={styles.aboutGreeting}>
          Hello, my name is Marius Budreika!
        </h3>
        <p className={styles.aboutMe}>
          I&apos;m seeking an opportunity to join a company where I can enhance
          my skills with React and contribute to creating amazing websites.
          I&apos;m passionate about UI design, and I&apos;m always up for a good
          challenge. Continuous learning is essential to me, and I&apos;m eager
          to expand my knowledge.
        </p>
        <button className={styles.aboutBtn}>Hire me</button>
      </div>
      <div className={styles.photoContainer}>
        <img src={myPhoto} alt="logo" className={styles.aboutPhoto} />
        {svgs.map((svg) => (
          <div key={svg.id} className={svg.className}>
            {svg.component}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
