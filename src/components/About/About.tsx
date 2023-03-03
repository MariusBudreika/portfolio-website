import React from 'react';
import styles from './about.module.scss';
import myPhoto from '../../assets/images/myPhoto.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutText}>
        <h3 className={styles.aboutGreeting}>
          Hello, my name is Marius Budreika!
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          praesentium minima distinctio suscipit non quasi modi quos tempore
          voluptatum error rerum tenetur facere quae dignissimos vitae, even
        </p>
        <button className={styles.aboutBtn}>Hire me</button>
      </div>
      <div>
        <img src={myPhoto} alt="logo" className={styles.aboutPhoto} />
      </div>
    </section>
  );
};

export default About;
