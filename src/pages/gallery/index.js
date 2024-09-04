import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid } from '../../components/ui/layout-grid';
import { SkeletonText } from '../../components/ui/Skeletons';
import NavBar from '../../components/Layout/navBar';
import { cn } from '../../utils/cn';
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function LayoutGridDemo() {
  const constraintsRef = useRef(null);
  const weddingSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('wedding1');

  const weddingCard1 = [
    {
      id: 1,
      content: (
        <SkeletonText
          story={`The room was filled with laughter and tears when the couple of the day
        walked through the doors.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-1/VL (1049).jpeg',
    },
    {
      id: 2,
      content: <SkeletonText story={`Confetti and cake were paid actors!`} />,
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-1/VL (1081).jpeg',
    },
    {
      id: 3,
      content: (
        <SkeletonText
          story={`Notice how Mr. D'Souza holds the mic as his Mrs. pulls up her reply to
        the toast on her phone?`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-1/VL (1183).jpeg',
    },
    {
      id: 4,
      content: (
        <SkeletonText
          story={`Do the rigga digga ding dong song! The whole party showed up on the
        dance floor for some line dancing.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-1/VL (1293).jpeg',
    },
    {
      id: 5,
      content: (
        <SkeletonText
          story={`A milestone celebration gets bigger and better when your best friends
        are right beside you.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-1/VL (1349).jpeg',
    },
    {
      id: 6,
      content: (
        <SkeletonText story={`Need some game ideas? We got your back.`} />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-1/VL (1408).jpeg',
    },
    {
      id: 7,
      content: (
        <SkeletonText
          story={`Key to a successful event? Treating all who play a role in the event
        with trust and respect.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-1/VL (1420).jpeg',
    },
    {
      id: 8,
      content: <SkeletonText story={`It all starts with family.`} />,
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-1/VL (1490).jpeg',
    },
    {
      id: 9,
      content: (
        <SkeletonText
          story={`We, my sister and I, wrote up a whole tribute and shed bucket loads of
        tears while delivering it.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-1/VL (1632).jpeg',
    },
    {
      id: 10,
      content: (
        <SkeletonText
          story={`"After 25 years, we still do." Our love and blessings will always be
        with Lucy (Andrea's mother) and Vincent (Andrea's father).`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-1/VL (1681).jpeg',
    },
  ];

  const weddingCard2 = [
    {
      id: 1,
      content: (
        <SkeletonText story={`A glimpse of the bride's Chura ceremony.`} />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Chura Ceremony.jpeg',
    },
    {
      id: 2,
      content: (
        <SkeletonText
          story={`When family and friends become one. The warmth shared between the
          bride's mum and her friends was so heartwarming to experience. This was
          clicked right after the bride's Haldi ceremony.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Haldi group picture.jpeg',
    },
    {
      id: 3,
      content: (
        <SkeletonText
          story={`A celebration of friendship. The highlight of the Mehndi was everyone,
          especially the bride's family and friends, go all out dancing to some
          dhol beats.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Mehndi evening.jpeg',
    },
    {
      id: 4,
      content: (
        <SkeletonText
          story={`The calm before the storm! This was the venue for the Sundowner Pool
          Party for the bride's Mehndi. A perfect combination of bold and pastel
          colors.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Mehndi Venue.jpeg',
    },
    {
      id: 5,
      content: (
        <SkeletonText
          story={`No matter how big a reception, we make sure every guest is greeted with
          a smile and looked after with love and care.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Reception venue.jpeg',
    },

    {
      id: 6,
      content: (
        <SkeletonText
          story={`The bride's in laws showering all their love and blessings on their
          daughter-in-law to be during the Shagun ceremony. In this midst of all
          this, we couldn't miss the groom blissfully gazing at his beautiful wife
          to be.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Shagun ceremony.jpeg',
    },
    {
      id: 7,
      content: (
        <SkeletonText
          story={`A surprise entry of the groom for his lovely bride coordinated and
          choreographed by the bride's friends.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail:
        '/assets/images/gallery/wed-2/W2 - Shagun n Cocktail party surprise dance.jpeg',
    },
    {
      id: 8,
      content: (
        <SkeletonText
          story={`The bride's friends performing their final duties before the bride
          enters the Gurudwara to get married.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Wedding bridesmaids.jpeg',
    },
    {
      id: 9,
      content: (
        <SkeletonText
          story={`The bride getting all decked up for her wedding day. We'd do anything to
          see our bride and groom calm and composed before one of the most
          important moments of their lives.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Wedding makeup.jpeg',
    },
    {
      id: 10,
      content: (
        <SkeletonText
          story={`We hope these smiles stay on until forever. Our love and blessings will
          always be with Avneet (bride) and Aakarshit (groom).`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-2/W2 - Reception.jpeg',
    },
  ];

  const weddingCard3 = [
    {
      id: 1,
      content: (
        <SkeletonText
          story={`A Keralite Catholic wedding at St. Eugene de Mazenod, Brampton, Ontario.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-3/1.jpeg',
    },
    {
      id: 2,
      content: (
        <SkeletonText
          story={`The exchange of rings. An everlasting promise of love and fidelity.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-3/2.jpeg',
    },
    {
      id: 3,
      content: (
        <SkeletonText
          story={`That eye contact sent shivers down our spine. A purposeful and
        meaningful look of intent.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-3/3.jpeg',
    },
    {
      id: 4,
      content: <SkeletonText story={`Dreams turned into reality.`} />,
      className: 'md:col-span-1',
      thumbnail: '/assets/images/gallery/wed-3/4.jpeg',
    },
    {
      id: 5,
      content: (
        <SkeletonText
          story={`A Keralite tradition (Minnu or Minnu Thali) of the groom tying a leaf
        shaped pendant around the bride's neck with a cross made of small beads,
        a symbol of the covenant of marriage as a reflection of Christ's love
        for His bride, the Church.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-3/5.jpeg',
    },
    {
      id: 6,
      content: (
        <SkeletonText
          story={`A Keralite tradition (Manthrakodi) of the groom placing a silk saree
        gifted by him and his family as a mantle over the bride's head
        reflecting his promise to honor, protect and provide for her for the
        rest of their lives.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-3/6.jpeg',
    },
    {
      id: 7,
      content: (
        <SkeletonText
          story={`And now our bride and groom are 'legally' married too!`}
        />
      ),
      className: 'md:col-span-3',
      thumbnail: '/assets/images/gallery/wed-3/7.jpeg',
    },
    {
      id: 8,
      content: (
        <SkeletonText
          story={`God protect and keep these two always. Our love and blessings will
        always be with Janet (bride) and Sebastian (groom).`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail: '/assets/images/gallery/wed-3/8.jpeg',
    },
  ];

  const weddingCard4 = [
    {
      id: 1,
      content: (
        <SkeletonText
          story={`A Mangalorean tradition (Maain Mudi Shivnchen) of the mother-in-law
          presenting a ring to her son-in-law. We can't miss the goofiness of the
          best man though!`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-1110.jpeg',
    },
    {
      id: 2,
      content: (
        <SkeletonText
          story={`A Mangalorean tradition (Opsun Divnchen) of the bride being handed over
          to the bridegroom's family. The emotions during this ceremony are so raw
          and real.`}
        />
      ),
      className: 'col-span-1',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-1130.jpeg',
    },
    {
      id: 3,
      content: (
        <SkeletonText
          story={`This was how our bride and groom reacted when they saw each other for
          the first time in their wedding attires. We were all so teary-eyed at
          this sight!`}
        />
      ),
      className: 'col-span-2',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-116.jpeg',
    },
    {
      id: 4,
      content: (
        <SkeletonText
          story={`Emotions of love, joy, and gratitude were expressed during the reply to
          the toast.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-714.jpeg',
    },
    {
      id: 5,
      content: (
        <SkeletonText
          story={`The bridesmaids were in awe when they saw their lady for the first time
          in her wedding gown. Their reactions were priceless.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-141.jpeg',
    },
    {
      id: 6,
      content: (
        <SkeletonText
          story={`The relationship between a bride and the best man is so often
          underrated. Our best man here did such a fine job supporting the bride
          all the way.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-248.jpeg',
    },
    {
      id: 7,
      content: (
        <SkeletonText
          story={`Doesn't this click radiate a sense of peace? With God's blessing on the
          couple's union and our management service on the wedding day, we hope
          for one to feel these positive emotions of peace and calm.`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-415.jpeg',
    },
    {
      id: 8,
      content: (
        <SkeletonText
          story={`Presenting to you the newly married couple. Don't we live for such
          moments?!`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-450.jpeg',
    },
    {
      id: 9,
      content: (
        <SkeletonText
          story={`Their love story is nothing short of a dream come true. It was only
          fitting for such a dreamy entrance.`}
        />
      ),
      className: 'md:col-span-2',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-546.jpeg',
    },

    {
      id: 10,
      content: (
        <SkeletonText
          story={`May God bless and keep them. Our love and blessings will always be with
          Melanie (bride) and Somanath (groom).`}
        />
      ),
      className: 'md:col-span-1',
      thumbnail:
        '/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-1233.jpeg',
    },
  ];

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
            onClick={() => handleCardClick('wedding1')}
            role='button'
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/gallery/wed-1/VL (1681).jpeg'
            />
            <CardContent sx={{ padding: '10px 0 0 0' }}>
              <Typography
                variant='body2'
                color='#000'
                sx={{ fontSize: '12px', fontWeight: '700' }}>
                LUCY AND VINCENT
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: '12px', marginBottom: '10px' }}>
                "After 25 years, we still do." Our love and blessings will
                always be with Lucy (Andrea's mother) and Vincent (Andrea's
                father).
              </Typography>
            </CardContent>
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
            onClick={() => handleCardClick('wedding2')}
            role='button'
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/gallery/wed-2/W2 - Reception.jpeg'
            />
            <CardContent sx={{ padding: '10px 0 0 0' }}>
              <Typography
                variant='body2'
                color='#000'
                sx={{ fontSize: '12px', fontWeight: '700' }}>
                AVNEET AND AAKARSHIT
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: '12px' }}>
                We hope these smiles stay on until forever. Our love and
                blessings will always be with Avneet (bride) and Aakarshit
                (groom).
              </Typography>
            </CardContent>
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
            onClick={() => handleCardClick('wedding3')}
            role='button'
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/gallery/wed-3/8.jpeg'
            />
            <CardContent sx={{ padding: '10px 0 0 0' }}>
              <Typography
                variant='body2'
                color='#000'
                sx={{ fontSize: '12px', fontWeight: '700' }}>
                JANET AND SEBASTIAN
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: '12px' }}>
                God protect and keep these two always. Our love and blessings
                will always be with Janet (bride) and Sebastian (groom).
              </Typography>
            </CardContent>
          </Card>
        </motion.div>{' '}
        <motion.div
          initial='initial'
          animate='animate'
          whileHover='hover'
          variants={fourth}
          whileTap='tap'
          className='w-100 flex flex-col items-center justify-center'>
          <Card
            onClick={() => handleCardClick('wedding4')}
            role='button'
            sx={{
              minWidth: 266,
              minHeight: 375,
              padding: '10px 10px',
              boxShadow: '0px 2.16px 10.78px 0px #00000040',
            }}>
            <CardMedia
              sx={{ height: '80%' }}
              image='/assets/images/gallery/wed-4/Sheldon+Dmello+Fotography(Melanie+&+Som)-546.jpeg'
            />
            <CardContent sx={{ padding: '10px 0 0 0' }}>
              <Typography
                variant='body2'
                color='#000'
                sx={{ fontSize: '12px', fontWeight: '700' }}>
                MELANIE AND SOMANATH
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: '12px' }}>
                May God bless and keep them. Our love and blessings will always
                be with Melanie (bride) and Somanath (groom).
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    );
  };

  const handleCardClick = (tab) => {
    setActiveTab(tab);
    weddingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const getActiveCards = () => {
    if (activeTab === 'wedding1') {
      return weddingCard1;
    } else if (activeTab === 'wedding2') {
      return weddingCard2;
    } else if (activeTab === 'wedding3') {
      return weddingCard3;
    } else if (activeTab === 'wedding4') {
      return weddingCard4;
    }
    // add more conditions as needed for additional tabs
  };

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
    <div className='andera-dsouza-website pt-0'>
      {' '}
      <div
        className='banner'
        style={{
          backgroundImage: 'url("/assets/images/gallery.jpeg")',
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
                Home / Gallery
              </div>
            </div>
            <div className='frame-parent1' style={{ color: 'white' }}>
              <div className='creating-the-best-day-ever-wrapper'>
                <h1 className='creating-the-best'>Gallery</h1>
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
      <section className='frame-parent pb-3'>
        <div className='i-am-deeply-passionate-about-c-wrapper'>
          <h1 className='i-am-deeply-container'>
            <span className='i-am-deeply'>{`I AM DEEPLY PASSIONATE ABOUT CREATING `}</span>
            <b>UNFORGETTABLE WEDDINGS</b>
            <span className='drawing-from-years'>{`, DRAWING FROM YEARS OF EXPERIENCE AND A DIVERSE `}</span>
            <b>PORTFOLIO</b>
            <span className='of-successful-events'> OF SUCCESSFUL EVENTS.</span>
          </h1>
        </div>
      </section>{' '}
      <svg
        className='string-height'
        width='1750'
        height='115'
        viewBox='0 0 1750 115'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          position: 'absolute',
          top: '32.5%',
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
        <BentoGrid className='mx-auto'>
          <BentoGridItem
            header={<Skeleton />}
            className={cn('[&>p:text-lg] md:col-span-2')}
          />
        </BentoGrid>
      </section>
      <section
        ref={weddingSectionRef}
        className='andera-dsouza-website-inner1 pb-0 my-4'>
        <div className='frame-parent2 w-100'>
          <div className='frame-parent4 align-items-center'>
            <div className='words-from-our text-center'>WEDDING PLANNER</div>
            <div className='welcome-to-our text-center width-text'>
              Turn your wedding dreams into reality. From intimate gatherings to
              extravagant celebrations, we're here to make your special day
              truly unforgettable.
            </div>
          </div>
        </div>
      </section>
      <section className='andera-dsouza-website-inner1 pb-0 mb-4'>
        <div
          className='frame-parent2 pb-0 w-100'
          style={{ position: 'relative' }}>
          <div className='h-100  w-full'>
            <LayoutGrid cards={getActiveCards()} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout(LayoutGridDemo);
