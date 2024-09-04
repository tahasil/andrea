import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import NavBar from '../components/Layout/navBar';
import { useRouter } from 'next/router';
import {
  CustomCarousel,
  CustomNextButton,
  CustomPrevButton,
} from '../styles/Globalstyles';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

// Main dashboard component
const Home = (props) => {
  const router = useRouter();
  const [carouselNumber, setCarouselNumber] = useState(0);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className='frame-parent5' onDragStart={handleDragStart}>
      <div className='frame-parent6' style={{ margin: '5% 10%' }}>
        <div className='ellipse-wrapper'>
          <img
            className='ellipse-icon'
            loading='lazy'
            alt=''
            style={{
              height: '100px',
              width: '100px',
            }}
            src='/assets/images/testimonials/test1.png'
          />
        </div>
        <div className='cyril-lopes-angelina-jolly-wrapper'>
          <h1 className='cyril-lopes'>{`Lucy and Vincent`}</h1>
        </div>
        <h3
          className='lorem-ipsum-dolor1'
          style={{ fontSize: 'large', lineHeight: '35px' }}>
          Our 25th Wedding Anniversary was organized by our daughter, Andrea
          D'Souza. At first, we had no plans to celebrate it for personal
          reasons, but little did we know, our decision to go ahead with
          Andrea's consultation and encouragement would engrave in our hearts,
          memories for a lifetime. We invite each one of you to approach Andrea
          to manage your wedding/anniversary to make it more special, meaningful
          and memorable.
          {/* <br />- AK and Avi ❤️❤️ */}
        </h3>
        {/* Flower */}
        <img
          className='vector-icon2'
          loading='lazy'
          alt=''
          src='/assets/images/vector-2.svg'
        />
        <img
          className='vector-icon3'
          loading='lazy'
          alt=''
          src='/assets/images/vector-3.svg'
        />
      </div>
    </div>,
    <div className='frame-parent5' onDragStart={handleDragStart}>
      <div className='frame-parent6' style={{ margin: '5% 10%' }}>
        <div className='ellipse-wrapper'>
          <img
            className='ellipse-icon'
            loading='lazy'
            alt=''
            style={{
              height: '100px',
              width: '100px',
            }}
            src='/assets/images/testimonials/test2.png'
          />
        </div>
        <div className='cyril-lopes-angelina-jolly-wrapper'>
          <h1 className='cyril-lopes'>{`Avneet and Aakarshit`}</h1>
        </div>
        <h3
          className='lorem-ipsum-dolor1'
          style={{ fontSize: 'large', lineHeight: '35px' }}>
          Andrea was with us before the wedding events could even begin. Be it
          supervising, organizing, getting everybody to dance and cheer,
          babysitting, organizing pre-wedding games, after-party celebrations,
          and even feeding the bride, quite literally, Andrea put her head and
          heart into all the events. We are confident that all her clients will
          remember their special days with happy tears and big smiles!
          {/* <br />- AK and Avi ❤️❤️ */}
        </h3>
        {/* Flower */}
        <img
          className='vector-icon2'
          loading='lazy'
          alt=''
          src='/assets/images/vector-2.svg'
        />
        <img
          className='vector-icon3'
          loading='lazy'
          alt=''
          src='/assets/images/vector-3.svg'
        />
      </div>
    </div>,
    <div className='frame-parent5' onDragStart={handleDragStart}>
      <div className='frame-parent6' style={{ margin: '5% 10%' }}>
        <div className='ellipse-wrapper'>
          <img
            className='ellipse-icon'
            loading='lazy'
            alt=''
            style={{
              height: '100px',
              width: '100px',
            }}
            src='/assets/images/testimonials/test3.png'
          />
        </div>
        <div className='cyril-lopes-angelina-jolly-wrapper'>
          <h1 className='cyril-lopes'>{`Janet and Sebastian`}</h1>
        </div>
        <h3
          className='lorem-ipsum-dolor1'
          style={{ fontSize: 'large', lineHeight: '35px' }}>
          What stood out was Andrea’s dedication to go the extra mile by
          personally reaching out to various points of contact at the church,
          including those involved with the choir and liturgy, guaranteeing that
          everything would run smoothly. Her support during the church rehearsal
          was invaluable, and we felt confident knowing that she was making sure
          every detail was just right. Working with her was an absolute
          pleasure, and we are grateful for the memorable day she helped create.
          {/* <br />- AK and Avi ❤️❤️ */}
        </h3>
        {/* Flower */}
        <img
          className='vector-icon2'
          loading='lazy'
          alt=''
          src='/assets/images/vector-2.svg'
        />
        <img
          className='vector-icon3'
          loading='lazy'
          alt=''
          src='/assets/images/vector-3.svg'
        />
      </div>
    </div>,
    <div className='frame-parent5' onDragStart={handleDragStart}>
      <div className='frame-parent6'>
        <div className='ellipse-wrapper'>
          <img
            className='ellipse-icon'
            loading='lazy'
            alt=''
            style={{
              height: '100px',
              width: '100px',
            }}
            src='/assets/images/testimonials/test4.png'
          />
        </div>
        <div className='cyril-lopes-angelina-jolly-wrapper'>
          <h1 className='cyril-lopes'>{`Melanie and Somanath`}</h1>
        </div>
        <h3
          className='lorem-ipsum-dolor1'
          style={{ fontSize: 'large', lineHeight: '35px' }}>
          We can literally say Andrea made our dream wedding come true. She
          worked like a professional with years of experience by putting up the
          whole plan in such a short amount of time. We are in awe of how
          effortless Andrea made everything seem. Even our friends and family
          commented on how great she was.
        </h3>

        <img
          className='vector-icon2'
          loading='lazy'
          alt=''
          src='/assets/images/vector-2.svg'
        />
        <img
          className='vector-icon3'
          loading='lazy'
          alt=''
          src='/assets/images/vector-3.svg'
        />
      </div>
    </div>,
  ];

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
      <div className='andera-dsouza-website pt-0'>
        {/* navbar and banner start*/}
        <div
          className='banner'
          style={{
            backgroundImage: 'url("/assets/images/banner.jpeg")',
            height: '780px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // display: 'grid',
            width: '100%',
            placeItems: 'center',
          }}>
          <NavBar />
          {/* navbar and banner end*/}

          {/* section1 start */}
          <section className='frame-section mt-0 banner'>
            <div className='frame-div'>
              <div className='frame-parent1 gap-0'>
                <div className='creating-the-best-day-ever-wrapper d-block padding-small-screen'>
                  <h1 className='creating-the-best font-small-screen height-small-screen'>
                    Turning your dream wedding into a reality.
                  </h1>
                </div>
                <div className='frame-wrapper'>
                  <Link href='/about-me'>
                    <Button
                      className='frame-button'
                      disableElevation={true}
                      variant='contained'
                      sx={{
                        color: '#000',
                        fontSize: '14',
                        background: '#fff !important',
                        borderRadius: '26px',
                        '&:hover': { background: '#fff' },
                        width: 211,
                        height: 50,
                      }}>
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div
            className='home-overlap eclipse-small-screen '
            style={{
              background: '#ffff',
              height: '100px',
              borderRadius: '50% 50% 0 0',
              position: 'relative',
              bottom: '-15%',
              left: '0',
              right: '0',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <div className='frame-item' /> */}
          </div>
        </div>
        {/* section1 end */}

        {/* section2 start */}
        <section className='frame-parent' style={{ marginTop: '40px' }}>
          <div className='i-am-deeply-passionate-about-c-wrapper' style={{fontStyle:"italic"}}>
            <h1 className='i-am-deeply-container'>
              <span className='i-am-deeply'>
                {`You're the answer to the prayers I've prayed, more than I've ever dreamed of So I give to you my heart today, and pledge my eternal love..`}
                <br />
                <span>by Lobo</span>
              </span>
            </h1>
          </div>
        </section>
        {/* section2 end */}

        {/* section3 start */}
        <section
          className='andera-dsouza-website-inner1 pb-0 mb-3'
          style={{ marginTop: '40px' }}>
          <div className='frame-parent2'>
            <img
              className='group-icon height-small-screen'
              loading='lazy'
              alt=''
              src='/assets/images/group-img.svg'
            />
            <div className='frame-wrapper1'>
              <div className='frame-parent3'>
                <div className='frame-parent4'>
                  <div className='your-exclusive-parent'>
                    <div className='your-exclusive'>YOUR EXCLUSIVE</div>
                    <h1 className='wedding-planner'>WEDDING PLANNER</h1>
                  </div>
                  <div className='lorem-ipsum-dolor'>
                    Bliss by Andrea offers on the day of coordination services
                    for weddings. With experience in managing weddings from
                    diverse cultures, Andrea and her team are always willing to
                    go above and beyond to turn your dream wedding into a
                    reality.
                    <br />
                    <br />
                    Here are some words from our founder...
                  </div>
                </div>
                <Link href='/gallery'>
                  <Button
                    className='frame-child1'
                    disableElevation={true}
                    variant='contained'
                    sx={{
                      color: '#d9544d',
                      fontSize: '14',
                      background: '#fceeee !important',
                      borderRadius: '26px',
                      border: 'solid 1px #d9544d',
                      '&:hover': { background: '#fceeee' },
                      width: 173,
                      height: 50,
                    }}>
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='highlight-color mt-lg-0 mt-md-5 mt-xl-5'>
          <div className='about-menu-content'>
            <div className='i-am-andrea'>
              <div className='creating-best-day-ever'>
                <div className='about-rating-ceremony'>
                  <div className='rating'>RATING</div>
                </div>
                <h1 className='words-from-our text-center'>
                  WORDS FROM OUR CLIENT
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section style={{ width: '100%' }}>
          <AliceCarousel
            renderPrevButton={() => <CustomPrevButton index={carouselNumber} />}
            renderNextButton={() => (
              <CustomNextButton index={carouselNumber} length={items.length} />
            )}
            mouseTracking
            onSlideChanged={(e) => setCarouselNumber(e.item)}
            items={items}
            style={{ padding: '20%' }}
          />
        </section>
      </div>
    </>
  );
};

// Connect Redux state and actions to the component and export
export default Layout(Home);
