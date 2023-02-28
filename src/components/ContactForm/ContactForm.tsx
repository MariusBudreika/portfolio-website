import React from 'react';
import styles from './contactForm.module.scss';
import { Plane as PlaneSVG } from '../../assets/icons/Plane';

const ContactForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <input
        type="email"
        placeholder="Enter email address"
        className={styles.formEmail}
      />
      <textarea
        placeholder="Enter message"
        className={styles.formText}
      ></textarea>
      <button type="submit" className={styles.formBtn}>
        Send{' '}
        <span>
          <PlaneSVG />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
