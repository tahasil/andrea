export const CustomNextButton = (props) => (
  <div
    className='frame-wrapper2'
    style={{
      display: 'flex',
      justifyContent: 'start',
      position: 'relative',
      bottom: '100px',
    }}>
    <div className='vector-parent'>
      {props.index === props.length - 1 ? (
        <img
          className='vector-icon1'
          loading='lazy'
          alt=''
          src='/assets/images/arrow-2.svg'
        />
      ) : (
        <img
          className='vector-icon1'
          loading='lazy'
          alt=''
          src='/assets/images/vector-1.svg'
        />
      )}
    </div>
  </div>
);

export const CustomPrevButton = (props) => (
  <div
    className='frame-wrapper2'
    style={{
      display: 'flex',
      justifyContent: 'end',
      position: 'relative',
      bottom: '100px',
    }}>
    <div className='vector-parent'>
      {props.index === 0 ? (
        <img
          className='vector-icon1'
          loading='lazy'
          alt=''
          src='/assets/images/arrow-1.svg'
        />
      ) : (
        <img
          className='vector-icon'
          loading='lazy'
          alt=''
          src='/assets/images/Vector.svg'
        />
      )}
    </div>
  </div>
);
