import Layout from '../../components/Layout/Layout';
import React, { useEffect, useState ,useRef} from 'react';
import { Button } from '@mui/material';
import NavBar from '../../components/Layout/navBar';
import { useMemo } from 'react';
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Main dashboard component
const AboutMe = (props) => {
  const constraintsRef = useRef(null);

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

  
  const Skeleton = () => {
    const first = {
      initial: {
        x: 10,
        y: 0,
        rotate: 12,
      },
      hover: {
        x: 10,
        y: 0,
        rotate: 0,
        scale: 1.2,
      },
      tap: {
        x: 10,
        y: 0,
        rotate: 0,
        scale: 1.2,
      },
    };
    const second = {
      initial: {
        x: 60,
        y: 40,
        rotate: 3,
      },
      hover: {
        x: 60,
        y: 40,
        rotate: 0,
        scale: 1.2,
      },
      tap: {
        x: 60,
        y: 40,
        rotate: 0,
        scale: 1.2,
      },
    };
    const third = {
      initial: {
        x: 120,
        y: 30,
        rotate: -10,
      },
      hover: {
        x: 120,
        y: 30,
        rotate: 0,
        scale: 1.2,
      },
      tap: {
        x: 120,
        y: 30,
        rotate: 0,
        scale: 1.2,
      },
    };
    const fourth = {
      initial: {
        x: 150,
        y: 0,
        rotate: 8,
      },
      hover: {
        x: 150,
        y: 0,
        rotate: 0,
        scale: 1.2,
      },
      tap: {
        x: 150,
        y: 0,
        rotate: 0,
        scale: 1.2,
      },
    };
    return (
      <motion.div
        className='flex flex-1 w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2'
        layoutScroll
        ref={constraintsRef}>
        <motion.div
          initial='initial'
          animate='animate'
          whileHover='hover'
          variants={first}
          whileTap='tap'
          className='w-100 flex flex-col items-center justify-center'>
          <Card
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/about/1.jpg'
            />
          </Card>
          {/* /> */}
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          whileHover='hover'
          variants={second}
          whileTap='tap'
          className='w-100 flex flex-col items-center justify-center'>
          <Card
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/about/2.jpg'
            />
          </Card>
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          whileHover='hover'
          variants={third}
          whileTap='tap'
          className='w-100 flex flex-col items-center justify-center z-10'>
          <Card
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/about/3.jpg'
            />
          </Card>
        </motion.div>{' '}
      </motion.div>
    );
  };

  return (
    <>
      <div className='andera-dsouza-website pt-0'>
        {/* navbar and banner start*/}
        <div
          className='banner'
          style={{
            backgroundImage: 'url("/assets/images/about-banner.jpeg")',
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
                  Home / About
                </div>
              </div>
              <div className='frame-parent1' style={{ color: 'white' }}>
                <div className='creating-the-best-day-ever-wrapper'>
                  <h1 className='creating-the-best'>About</h1>
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
        {/* section1 end */}
        {/* section2 start */}
        <section className='frame-parent'>
          <div className='i-am-deeply-passionate-about-c-wrapper'>
            <h1 className='i-am-deeply-container'>
              <span className='i-am-deeply'>{`SUCCESSFUL COLLABORATIONS WITH THE COUPLE TO CREATE A `}</span>
              <b>WEDDING</b>
              <span className='drawing-from-years'>{` THAT PERFECTLY REFLECTED THEIR `}</span>
              <b>PERSONALITIES </b>
              <span className='of-successful-events'>AND RELATIONSHIP.</span>
            </h1>
          </div>
        </section>
        {/* section2 end */}

        {/* section3 start */}
        <section className='andera-dsouza-website-inner1 pb-0'>
          <div className='frame-parent2 w-100'>
            <section className='frame-group-section3 padding-small-screen pb-2'>
              <div className='frame-container mb-4 pr-0 align-items-center'>
                <div className='instagram-icon-parent pr-0'>
                  <img
                    className='group-icon height-small-screen ceremony-display-block tab-height'
                    loading='lazy'
                    alt=''
                    src='/assets/images/about-group-img.svg'
                  />
                  <div className='instagram-icon'>
                    <div className='whatsapp-icon'>
                      <div className='facebook-icon center-small-screen'>
                        <h1 className='hello-my-name-container'>
                          <p className='hello-my-name'>{`Hello, My Name Is Andrea & I’m A wedding Co-ordinator.`}</p>
                        </h1>
                        <div className='welcome-to-our-website-we-are-parent'>
                          <div className='welcome-to-our'>{`My goal is to make the wedding planning process as smooth and enjoyable as possible for my clients. I work closely with each couple to understand their unique vision, style, and budget. Then I leverage my extensive vendor network and planning expertise to bring that vision to life.`}</div>
                          <div className='about-vector-parent'>
                            <img
                              className='about-vector-icon'
                              alt=''
                              src='/assets/images/about-vector.svg'
                            />
                          </div>
                        </div>
                        <div style={{ marginLeft: '10%' }}>
                          <img
                            className=''
                            loading='lazy'
                            alt=''
                            src='/assets/images/signature.png'
                          />
                          <div className='whatsapp-icon-inner'>
                            <div className='header-background-parent'>
                              <div className='header-background'>
                                <h2 className='with-love'>With Love</h2>
                              </div>
                              <h3 className='andrea-dsouza1'>Andrea D’souza</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className='group-icon height-small-screen ceremony-display-none tab-height'
                    loading='lazy'
                    alt=''
                    src='/assets/images/about-group-img.svg'
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* section3 end */}

        {/* section4 start */}
        <section className='andera-dsouza-website-inner1 pb-0'>
          <div className='frame-parent2 w-100'>
            <section className='frame-group-section3 pb-2'>
              <div className='frame-container mb-4 pr-0 align-items-center'>
                <div className='instagram-icon-parent pr-0'>
                  <div className='instagram-icon'>
                    <div className='wrapper-place-wedding-ceremony-parent'>
                      <div className='about-vector-parent black-border' />
                      <img
                        style={{
                          height: 'auto',
                        }}
                        className='group-icon height-small-screen tab-width'
                        alt=''
                        src='/assets/images/bottom-ceremony.jpeg'
                      />
                      <img
                        className='group-icon height-small-screen tab-width'
                        style={{
                          flex: '1.5',
                          height: 'auto',
                        }}
                        loading='lazy'
                        alt=''
                        src='/assets/images/bottom-ceremony-1.jpeg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* section4 end */}

        {/* section5 start */}
        <svg
        className='string-height'
        width='1750'
        id='string-about'
        height='115'
        viewBox='0 0 1750 115'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          position: 'absolute',
          top: '80%',
          width: 'auto',
          overflow: 'hidden',
          maxWidth: '100%',
        }}>
        <path
          d='M1749.7 0.961021C1702.16 23.2595 1632.46 43.534 1544.53 60.6168C1456.62 77.6984 1352.24 91.2497 1237.36 100.495C1122.48 109.741 999.35 114.5 875 114.5C750.651 114.5 627.52 109.741 512.639 100.496C397.757 91.2498 293.38 77.6985 205.465 60.6169C117.544 43.5341 47.8353 23.2596 0.298391 0.96119'
          stroke='black'
        />
      </svg>
      <section
        className='frame-parent'
        style={{
          position: 'relative',
          // padding: "0px 20px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
        }}>
        <BentoGrid className='about-grid-margin'>
          <BentoGridItem
            header={<Skeleton />}
            className={cn('[&>p:text-lg] md:col-span-2')}
          />
        </BentoGrid>
      </section>
      </div>
    </>
  );
};

// Connect Redux state and actions to the component and export
export default Layout(AboutMe);
