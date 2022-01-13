import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/components/Form.module.scss';

const Form = () => {
  const form = useRef();
  const [input, setInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_v8qakih',
        'template_cv45din',
        form.current,
        'user_YuoZ9Iwz3aJJQ3IumKsdX'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <input
        type='text'
        placeholder='Name'
        className={styles.inputStyle}
        value={input.name}
        name='name'
        onChange={handleChange}
        required
      />

      <input
        type='email'
        placeholder='Email'
        className={styles.inputStyle}
        value={input.email}
        name='email'
        onChange={handleChange}
        required
      />
      <input
        type='text'
        placeholder='Subject'
        className={styles.inputStyle}
        value={input.subject}
        name='subject'
        onChange={handleChange}
      />
      <textarea
        placeholder='Message'
        className={`${styles.inputStyle} ${styles.text}`}
        value={input.message}
        name='message'
        onChange={handleChange}
        required
      ></textarea>
      <input type='submit' value='Send a message_' className={styles.btn} />
    </form>
  );
};

export default Form;
