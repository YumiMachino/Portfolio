import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import styles from '@/styles/components/Form.module.scss';
import Button from './Button';
import { FaCheckCircle } from 'react-icons/fa';
import { MdSmsFailed } from 'react-icons/md';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: Inputs = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Form = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
          setIsSent(true);
          setIsOk(true);
        },
        (error) => {
          console.log(error.text);
          setIsSent(true);
          setIsOk(false);
        }
      );
  };

  const renderMessage = () => {
    const timeout = setTimeout(() => setIsSent(false), 5000);
    return (
      <div className={styles.submitMsg}>
        {isOk ? (
          <div className={styles.success}>
            <FaCheckCircle />
            <p>Thank you! Your Message has been sent.</p>
          </div>
        ) : (
          <div className={styles.failure}>
            <MdSmsFailed />
            <p>Message Failed to Send. </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {isSent && renderMessage()}
      <input
        {...register('name', {
          required: true,
          minLength: 2,
          maxLength: 20,
        })}
        type='string'
        placeholder='Enter your name'
        className={styles.inputStyle}
      />

      <input
        {...register('email', {
          required: true,
        })}
        type='email'
        placeholder='Enter your Email'
        className={styles.inputStyle}
      />

      <input
        {...register('subject')}
        type='string'
        placeholder='Enter subject'
        className={styles.inputStyle}
      />

      <textarea
        {...register('message', {
          required: true,
          minLength: 5,
          maxLength: 100,
        })}
        placeholder='Enter message'
        className={styles.inputStyle}
      />

      <div className={styles.submitBtn}>
        <Button isPrimary={true} content='Send a message' />
      </div>
    </form>
  );
};

export default Form;
