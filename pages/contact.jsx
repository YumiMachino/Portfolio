import Form from '@/components/Form';
import HeadingTitle from '@/components/HeadingTitle';
import Layout from '@/components/Layout';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';
import { IconContext } from 'react-icons';
import styles from '@/styles/Contact.module.scss';

const contact = () => {
  return (
    <Layout>
      <div className={styles.border}>
        <HeadingTitle title='Contact' />
        <div className={styles.container}>
          <div className={styles.contactLeft}>
            <h1 className={styles.heading}>Contact Form</h1>
            <Form />
          </div>
          <div className={styles.contactRight}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.para}>
              I'd love to hear from you!
              <br />
              Simply fill the form and send me an email.
            </p>

            <p className={styles.para}>
              Or check my work in Github or connect with me on LinkedIn.
            </p>

            <p className={styles.para}>Thanks for stopping by!</p>

            <p className={styles.para}>
              Straight shot to my index:
              <a href='mailto:yumimachino@gmail.com' className={styles.email}>
                yumimachino@GMAIL.COM
              </a>
            </p>

            <div className={styles.icons}>
              <IconContext.Provider value={{ className: `${styles.icon}` }}>
                <a href='/'>
                  <FaGithub />
                </a>
                <a href='/'>
                  <FaLinkedin />
                </a>
                <a href='/'>
                  <FaTwitterSquare />
                </a>
                <a>
                  <SiQiita />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
