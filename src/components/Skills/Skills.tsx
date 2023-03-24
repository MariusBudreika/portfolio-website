import React from 'react';
import styles from './skills.module.scss';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
  const icons = {
    HTML: AiFillHtml5,
    CSS: DiCss3,
    Sass: DiSass,
    Javascript: SiJavascript,
    React: DiReact,
    Typescript: SiTypescript
  };

  return (
    <section className={styles.skills}>
      <h3 className={styles.skillsTitle}>Skills</h3>
      <p className={styles.skillsParagraph}>
        I have vast experience in the following web technologies
      </p>

      <ul className={styles.skillsListContainer}>
        {Object.entries(icons).map(([tech, Icon]) => (
          <li key={tech} className={styles.skillsList}>
            <Icon className={styles.skillsIcon} />
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
