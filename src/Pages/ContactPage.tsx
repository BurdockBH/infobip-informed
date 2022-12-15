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
        <TextField
          FormHelperTextProps={{ style: { backgroundColor: 'rgb(238,238,238)', margin: '0' } }}
          sx={{ background: 'white', width: '50%', margin: 'auto' }}
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
          FormHelperTextProps={{ style: { backgroundColor: 'rgb(238,238,238)', margin: '0' } }}
          sx={{ background: 'white', width: '50%', margin: 'auto' }}
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
          FormHelperTextProps={{ style: { backgroundColor: 'rgb(238,238,238)', margin: '0' } }}
          sx={{ background: 'white', width: '80%', margin: 'auto' }}
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
      </div>
      <Button
        sx={{
          'margin-bottom': '10%',
          'margin-left': '45%',
          'margin-right': '45%',
          width: '-webkit-fill-available',
        }}
        onClick={() => {
          console.log(emailError);
          if (!nameError.status && !emailError.status && !messageError.status) {
            sendEmail();
            setFormData({ name: '', email: '', message: '' });
            handleClickOpen();
          }
        }}
        variant='contained'
      >
        Send
      </Button>
      <AlertDialog open={open} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default Contact;
