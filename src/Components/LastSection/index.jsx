import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import s from './contact.module.css'

const Result = () => {
  return (
    <p style={{ "color": "#31ec42" }}>Tu mensaje ha sido enviado satisfactoriamente. Te contactaremos pronto!</p>
  )
}
export default function Contact() {
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ysrvm6b', e.target, 'user_GdBu7T9DTHFnIo5cvAyNk')
      .then((result) => {

        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showresult(true)
  };
  return (
    <div className={s.body} id="contacto">
      <div className={s.contactme} id="contact">
        <div className={s.contactOverlay}>
          <div className={s.container}>
            <div className={s.form}>
              <form action="" onSubmit={sendEmail} className={s.contForm}>
                <div className={s.formWord}>
                  <h2 className={s.h2}>Stay in touch!</h2>

                  <input type="text" name="from_name" required placeholder='Your name...' />
                  <br />

                  <input type="text" name="reply_to" required placeholder='Your email...' />


                  <br />
                  <textarea className={s.textarea} type="text" name="message" required placeholder='Your message...' />
                  <br />
                </div>
                <div className={s.formWords}>
                  <p>If you are interested in a FullStack Developer with a lot of hunger
                    to learn and put into practice his knowledge you are in the right spot.</p>
                  <button>SUBMIT</button>
                  <div className={s.row}>{result ? <Result /> : null}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}