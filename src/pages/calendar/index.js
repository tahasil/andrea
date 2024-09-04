import Layout from '../../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NavBar from '../../components/Layout/navBar';
import CloseIcon from '@mui/icons-material/Close';

import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import {
  postCreateUserApi,
  postCreateUserReset,
} from '../../actions/postCreateUserAction';
import { handleInputChange } from '../../utils/helper';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';
import {
  TextareaAutosize,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  Typography,
  Modal,
  Box,
  TextField,
  CardContent,
  Card,
  Grid,
  Divider,
  Chip,
  Snackbar,
  IconButton,
} from '@mui/material';

const BookAppointment = (props) => {
  const { postCreateUser, postCreateUserState, postCreateUserReset } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
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

  const onSubmit = (data) => {
    const submissionData = isEnquiry ? { ...data, is_enquiry: true } : data;
    postCreateUser(submissionData);
  };

  useCalendlyEventListener({
    // onProfilePageViewed: () => console.log('onProfilePageViewed'),
    // onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
    // onEventTypeViewed: () => console.log('onEventTypeViewed'),
    onEventScheduled: (e) => {
      console.log(e.data.payload, '0=0=0=0=0=0=0=0=0=0=');
      fetch({
        url: e.data.payload.event,
        method: 'GET',
      }).then((res) => {
        console.log(res, '0=0=0=0=0=0=0=0=0=0=');
      });
    },
    // onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector('.banner');
      const scrollY = window.scrollY;
      banner.style.backgroundPositionY = `${scrollY * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      <div className='andera-dsouza-website pt-0 pb-0'>
        {/* navbar and banner start*/}
        <div
          className='banner'
          style={{
            backgroundImage: 'url("/assets/images/calendar.jpeg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            placeItems: 'center',
          }}>
          <NavBar />
          {/* navbar and banner end*/}

          {/* section1 start */}
          <section
            className='frame-section banner'
            style={{
              marginTop: '100px',
              // marginBottom:"50px",
              padding: '0px',
            }}>
            <div className='frame-div' style={{ gap: '0' }}>
              <div className='life-is-an-event-wrapper'>
                <div className='' style={{ color: 'white' }}>
                  Home / Calendar
                </div>
              </div>
              <div className='frame-parent1' style={{ color: 'white' }}>
                <div className='creating-the-best-day-ever-wrapper'>
                  <h1 className='creating-the-best'>Calendar</h1>
                </div>
              </div>
            </div>
          </section>
          <div
            className='overlap'
            style={{
              background: '#ffff',
              height: '100px',
              borderRadius: '50% 50% 0 0',
              bottom: '-90px',
              left: '0',
              right: '0',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <InlineWidget url='https://calendly.com/blissbyandrea-info/30min' />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  getCurrentScheduleTimingListState: state.getCurrentScheduleTimingList,
  postCreateUserState: state.postCreateUser,
  postCheckoutSessionState: state.postCheckoutSession,
  patchUpdateTimeSlotTempReservedState: state.patchUpdateTimeSlotTempReserved,
});

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  getCurrentScheduleTimingList: (params) =>
    dispatch(getCurrentScheduleTimingListApi(params)),
  postCreateUser: (params) => dispatch(postCreateUserApi(params)),
  postCheckoutSession: (params) => dispatch(postCheckoutSessionApi(params)),
  patchUpdateTimeSlotTempReserved: (params) =>
    dispatch(patchUpdateTimeSlotTempReservedApi(params)),
  postCreateUserReset: (params) => dispatch(postCreateUserReset(params)),
});

const ConnectedBookAppointment = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookAppointment);

// Connect Redux state and actions to the component and export
// export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
export default Layout(ConnectedBookAppointment);
