import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Instagram, WhatsApp } from '@mui/icons-material';
import Link from 'next/link';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { handleInputChange } from '../../utils/helper';
import {
  postCreateUserApi,
  postCreateUserReset,
} from '../../actions/postCreateUserAction';

const Footer = ({
  postCreateUser,
  postCreateUserState,
  postCreateUserReset,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formData, setFormData] = useState({});

  const currentYear = new Date().getFullYear();

  // Function to determine if a link should be active
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = (data) => {
    postCreateUser({ ...data, is_enquiry: true });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleCloseSnackbar}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  const validateMeetingAgenda = (value) => {
    if (!value) {
      return 'Meeting agenda is required';
    }
    if (value.length < 10) {
      return 'Meeting agenda must be at least 10 characters long';
    }
    return true;
  };

  useEffect(() => {
    if (!!errors.email) {
      setSnackbarMessage('Invalid email address');
      setOpenSnackbar(true);
    }
  }, [errors]);

  useEffect(() => {
    if (postCreateUserState.apiState === 'success') {
      setSnackbarMessage(postCreateUserState.message);
      setOpenSnackbar(true);
    }
    if (postCreateUserState.apiState === 'error') {
      setSnackbarMessage(postCreateUserState.message);
      setOpenSnackbar(true);
    }
    postCreateUserReset();
  }, [postCreateUserState]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        className='footer_form'
        style={{
          backgroundImage: 'url("/assets/images/footer.jpeg")',
          height: '485px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}>
        <div className='common-padding'>
          <p className='Stay-in-loop-with-the-latest-tips-trends'>
            FILL OUT THE FORM BELOW TO GET IN TOUCH.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  InputProps={{
                    style: {
                      color: 'white', // Set the text color to white, if needed
                    },
                  }}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Default white border
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color
                      '&.Mui-focused': {
                        color: 'white', // Label color when focused
                      },
                    },
                    '& .MuiInputBase-root': {
                      borderBottom: '0', // Label color
                    },
                  }}
                  id='name'
                  label='Name'
                  name='name'
                  variant='outlined'
                  margin='dense'
                  size='small'
                  style={{
                    width: '100%',
                  }}
                  {...register('name', { required: true })}
                  error={!!errors.name}
                  helperText={errors.name && 'Name is required'}
                  onChange={(value) => {
                    handleInputChange(value, setFormData, formData);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  InputProps={{
                    style: {
                      color: 'white', // Set the text color to white, if needed
                    },
                  }}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Default white border
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color
                      '&.Mui-focused': {
                        color: 'white', // Label color when focused
                      },
                    },
                    '& .MuiInputBase-root': {
                      borderBottom: '0', // Label color
                    },
                  }}
                  id='email'
                  label='Email'
                  name='email'
                  variant='outlined'
                  margin='dense'
                  size='small'
                  style={{
                    width: '100%',
                  }}
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  error={!!errors.email}
                  helperText={errors.email && 'Invalid email address'}
                  onChange={(value) => {
                    handleInputChange(value, setFormData, formData);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  InputProps={{
                    style: {
                      color: 'white', // Set the text color to white, if needed
                    },
                  }}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Default white border
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color
                      '&.Mui-focused': {
                        color: 'white', // Label color when focused
                      },
                    },
                    '& .MuiInputBase-root': {
                      borderBottom: '0', // Label color
                    },
                  }}
                  id='phone'
                  label='Phone'
                  name='phone'
                  variant='outlined'
                  margin='dense'
                  size='small'
                  style={{
                    width: '100%',
                  }}
                  {...register('phone', {
                    required: true,
                    pattern: /^\d{10}$/,
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone && 'Invalid phone number'}
                  onChange={(value) => {
                    handleInputChange(value, setFormData, formData);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    style: {
                      color: 'white', // Set the text color to white, if needed
                    },
                  }}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Default white border
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color
                      '&.Mui-focused': {
                        color: 'white', // Label color when focused
                      },
                    },
                    '& .MuiInputBase-root': {
                      borderBottom: '0', // Label color
                    },
                  }}
                  id='meeting_agenda'
                  label='Please share anything that will help us understand your concern.'
                  name='meeting_agenda'
                  variant='outlined'
                  margin='dense'
                  size='small'
                  multiline
                  maxRows={2}
                  rows={2}
                  style={{
                    width: '100%',
                  }}
                  {...register('meeting_agenda', {
                    validate: validateMeetingAgenda,
                  })}
                  error={!!errors.meeting_agenda}
                  helperText={
                    errors.meeting_agenda ? errors.meeting_agenda.message : ''
                  }
                  onChange={(value) => {
                    handleInputChange(value, setFormData, formData);
                  }}
                />
              </Grid>
            </Grid>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
              }}>
              <Button variant='outlined' type='submit' className='Rectangle'>
                <span className='Submit'>Submit</span>
              </Button>
            </div>{' '}
          </form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}>
            <a
              href='https://www.instagram.com/3_andyy'
              target='_blank'
              rel='noopener noreferrer'
              style={{ margin: 'auto 5px' }}>
              <Instagram className='Vector' />
            </a>
            <a
              href='https://wa.me/14372161838'
              target='_blank'
              rel='noopener noreferrer'
              style={{ margin: 'auto 5px' }}>
              <WhatsApp className='Vector' />
            </a>
          </div>
        </div>
      </div>
      <div
        className='overlap'
        style={{
          background: '#272727',
          height: '100px',
          borderRadius: '50% 50% 0 0',
          position: 'absolute',
          bottom: '-45px',
          left: '0',
          right: '0',
          zIndex: 2,
        }}></div>
      <div
        style={{
          background: '#272727',
          position: 'absolute',
          left: '0',
          right: '0',
          zIndex: 2,
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} style={{ padding: '40px 60px' }}>
            <span className='title sitemap-font'>
              ON YOUR SPECIAL DAY, OUR WEDDING PLANNERS WILL LEAVE YOU
              BREATHLESS.
            </span>
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: '40px 60px' }}>
            <span className='Sitemap'>Sitemap</span>
            <Grid container spacing={2} style={{ marginTop: '5px' }}>
              <Grid item xs={12} sm={3} md={12} lg={3} xl={3}>
                {/* <span className='menu_item'>Home</span> */}
                <Link href='/' className='menu_item'>
                  Home
                </Link>
              </Grid>
              <Grid item xs={12} sm={3} md={12} lg={3} xl={3}>
                {/* <span className='menu_item'>About</span> */}
                <Link href='/about-me' className='menu_item'>
                  About
                </Link>
              </Grid>
              <Grid item xs={12} sm={3} md={12} lg={3} xl={3}>
                {/* <span className='menu_item'>Gallery</span> */}
                <Link href='/gallery' className='menu_item'>
                  Gallery
                </Link>
              </Grid>
              <Grid item xs={12} sm={3} md={12} lg={3} xl={3}>
                {/* <span className='menu_item'>Calendar</span> */}
                <Link href='/calendar' className='menu_item'>
                  Calendar
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: '10px 60px' }}>
            <Grid
              container
              spacing={2}
              className='align-items-center justify-content-between'>
              <Grid item xs={12} sm={5} md={5} lg={6} xl={4}>
                <span className='Copyright-2020-Laa'>
                  All rights reserved to Andrea D’souza | Coypright @
                  {currentYear}
                </span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={4}
                className='d-sm-flex justify-content-end'>
                <div className='andrea-dsouza-wrapper mb-5'>
                  <img
                    src='/assets/images/nav-logo.svg'
                    className='andrea-dsouza'
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  postCreateUserState: state.postCreateUser,
});

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  postCreateUser: (params) => dispatch(postCreateUserApi(params)),
  postCreateUserReset: (params) => dispatch(postCreateUserReset(params)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
