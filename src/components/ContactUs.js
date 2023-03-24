// Email JS
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import btnStyles from "../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import styles from "../styles/CallsheetEmail.module.css";
import { useState } from 'react';

export const ContactUs = () => {
  const form = useRef();
  const [process, setProcess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setProcess("sending");

    emailjs.sendForm('gmail', 'call_sheet', form.current, 'user_TZnl6mBgWTUOAkmv8HKrB')
      .then((result) => {
          console.log(result.text);
          setProcess("success");
      }, (error) => {
          console.log(error.text);
          setProcess("error");
      });
  };

  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    {process === "sending" && (
        <div style={{ color: "blue" }}>Sending Emails...</div>
        )
    }
    {process === "sent" && (
        <div style={{ color: "green" }}>Success! Emails Sent</div>
    )
    }
    {process === "error" && (
        <div style={{ color: "red" }}>Error! Emails Failed to Send.</div>
    )

    }
    </div>
  );
};