import React, { useState } from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sendEmail = () => {
    emailjs.send('service_qrbh14g', 'template_c0k8lg6', formData, 'Vnvo3cIQ2XdfDEPob').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div className='App'>
      <MainNavBar />
      <div className='contact-form'>
        <TextField
          sx={{ width: '50%', margin: 'auto' }}
          id='outlined-basic'
          label='Name'
          multiline={true}
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          sx={{ width: '50%', margin: 'auto' }}
          id='outlined-basic'
          label='E-mail'
          multiline={true}
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          sx={{ width: '80%', margin: 'auto' }}
          id='outlined-basic'
          label='Message'
          multiline={true}
          value={formData.message}
          onChange={(event) => {
            setFormData({ ...formData, message: event.target.value });
          }}
        />
      </div>
      <Button
        sx={{
          'margin-bottom': '10%',
          'margin-left': '45%',
          'margin-right': '45%',
          width: '-webkit-fill-available',
        }}
        onClick={() => {
          sendEmail();
          setFormData({ name: '', email: '', message: '' });
        }}
        variant='contained'
      >
        Send
      </Button>
      <Footer />
    </div>
  );
}

export default Contact;
