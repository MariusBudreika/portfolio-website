import React, { useRef } from 'react';
import styles from './contactForm.module.scss';
import { Plane as PlaneSVG } from '../../assets/icons/Plane';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID ?? '';
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID ?? '';
    const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY ?? '';
    if (form.current != null)
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <input
        type="email"
        name="sender_email"
        placeholder="Enter email address"
        className={styles.formEmail}
        required
      />
      <textarea
        placeholder="Enter message"
        name="message"
        className={styles.formText}
        required
      ></textarea>
      <button type="submit" className={styles.formBtn}>
        Send&nbsp;
        <span>
          <PlaneSVG />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
