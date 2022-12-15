import React, { useState } from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import AlertDialog from '../components/Dialog';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState({ status: false, message: '' });
  const [nameError, setNameError] = useState({ status: false, message: '' });
  const [messageError, setMessageError] = useState({ status: false, message: '' });

  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isValidEmail = (email: any) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className='App'>
      <MainNavBar />
      <div className='contact-form'>
        <h1 className='contact-title'>Send us something interesting</h1>
        <TextField
          sx={{ background: 'white', width: '80%', margin: 'auto' }}
          id='outlined-basic'
          label='Name'
          multiline={true}
          value={formData.name}
          error={nameError.status}
          helperText={nameError.message}
          onChange={(event) => {
            if (event.target.value === '')
              setNameError({ status: true, message: 'Name cannot be empty' });
            else setNameError({ status: false, message: '' });
            setFormData({ ...formData, name: event.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          sx={{ background: 'white', width: '80%', margin: 'auto' }}
          id='outlined-basic'
          label='E-mail'
          multiline={true}
          value={formData.email}
          error={emailError.status}
          helperText={emailError.message}
          onChange={(event) => {
            if (!isValidEmail(event.target.value))
              setEmailError({ status: true, message: 'Invalid email' });
            else setEmailError({ status: false, message: '' });
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          inputProps={{
            style: {
              height: '250px',
            },
          }}
          sx={{ background: 'white', width: '80%', margin: 'auto', 'margin-bottom': '5%' }}
          size='small'
          id='outlined-basic'
          label='Message'
          multiline={true}
          value={formData.message}
          error={messageError.status}
          helperText={messageError.message}
          onChange={(event) => {
            if (event.target.value == '')
              setMessageError({ status: true, message: 'Message cannot be empty' });
            else setMessageError({ status: false, message: '' });
            setFormData({ ...formData, message: event.target.value });
          }}
        />
        <Button
          sx={{
            margin: 'auto',
            width: '30%',
          }}
          onClick={() => {
            console.log(emailError);
            if (
              !nameError.status &&
              !emailError.status &&
              !messageError.status &&
              formData.name != '' &&
              formData.email != '' &&
              formData.message != ''
            ) {
              sendEmail();
              setFormData({ name: '', email: '', message: '' });
              handleClickOpen();
            }
          }}
          variant='contained'
        >
          Send
        </Button>
      </div>

      <AlertDialog open={open} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default Contact;
