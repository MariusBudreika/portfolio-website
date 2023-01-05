import React from 'react';
import styles from './skills.module.scss';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h3 className={styles.skillsTitle}>Skills</h3>
      <p className={styles.skillsParagraph}>
        I have vast experience in the following web technologies
      </p>

      <ul className={styles.skillsTech}>
        <li>
          <AiFillHtml5 />
          HTML
        </li>
        <li>
          <DiCss3 /> CSS
        </li>
        <li>
          <DiSass /> Sass
        </li>
        <li>
          <SiJavascript /> Javascript
        </li>
        <li>
          <DiReact /> React
        </li>
        <li>
          <SiTypescript /> Typescript
        </li>
      </ul>
    </section>
  );
};

export default Skills;
