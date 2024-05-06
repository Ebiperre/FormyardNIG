import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contact2 = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_27at7wa', 'XgWbLcFNklGViZ9qi', form.current, {
        publicKey: 'XgWbLcFNklGViZ9qi',
      })
      .then(
        () => {
          console.log('SUCCESS!');  
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" className="cursor-pointer" value="send" />
      </form>
    </div>
  );
};

export default contact2;
