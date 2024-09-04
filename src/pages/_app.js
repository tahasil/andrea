import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '../store/index'; // Importing the Redux store
import Head from 'next/head';
import '../styles/css/footer.css';
import '../styles/css/responsive.css';
import '../styles/css/header.css';
import '../styles/css/navbar.css';
import '../styles/css/calendar.css';
import '../styles/css/carousel.css';
import '../styles/css/gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/style.css';
import '../styles/css/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bliss By Andrea</title>
        <link rel='icon' href='/assets/images/favicon.png' />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        {/* Rendering the main component of the application */}
      </Provider>
    </>
  );
}
