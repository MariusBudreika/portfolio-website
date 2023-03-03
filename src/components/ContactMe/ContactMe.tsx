import React from 'react';
import styles from './contactMe.module.scss';
import chats from '../../assets/images/chats.png';
import ContactForm from 'components/ContactForm/ContactForm';

const ContactMe: React.FC = () => {
  return (
    <section id="contactMe" className={styles.contact}>
      <h3 className={styles.contactTitle}>Contact Me</h3>
      <div className={styles.contactBottom}>
        <img src={chats} alt="" className={styles.contactImg} />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;
