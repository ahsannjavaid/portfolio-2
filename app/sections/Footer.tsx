import * as React from 'react';

const Footer = () => {
  return (
    <footer
      className={'z-50 relative h-[300px] sm:h-[150px] w-full bg-primary mt-20'}
      style={{
        display: 'block',
      }}
    >
      <div className='z-40 absolute w-full h-full flex justify-center items-center'>
        <div className='pt-8 px-6 text-center'>
        Please have a look on my
        <a
          className='px-1 underline hover:italic'
          href='https://behance.net/ahsannjavaid'
          target='_blank'
          rel='noreferrer'
        >
          Graphic Design Portfolio
        </a>
        as well.
      </div>
      </div>
      <div
        id='svg-container'
        className='relative z-[20] top-0 left-0 w-full h-full overflow-hidden'
      >
        <svg
          id='wave'
          preserveAspectRatio='none'
          className='absolute top-0 -left-[200px] md:left-0 w-[1200px] md:w-full h-full'
          viewBox='0 0 1440 500'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
              <stop stopColor='#5f2387' offset='0%'></stop>
              <stop stopColor='#1669b2' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            fill='url(#sw-gradient-0)'
            d='M0,98L34.3,114.3C68.6,131,137,163,206,155.2C274.3,147,343,98,411,81.7C480,65,549,82,617,73.5C685.7,65,754,33,823,40.8C891.4,49,960,98,1029,122.5C1097.1,147,1166,147,1234,130.7C1302.9,114,1371,82,1440,130.7C1508.6,180,1577,310,1646,310.3C1714.3,310,1783,180,1851,106.2C1920,33,1989,16,2057,24.5C2125.7,33,2194,65,2263,130.7C2331.4,196,2400,294,2469,277.7C2537.1,261,2606,131,2674,81.7C2742.9,33,2811,65,2880,114.3C2948.6,163,3017,229,3086,245C3154.3,261,3223,229,3291,212.3C3360,196,3429,196,3497,171.5C3565.7,147,3634,98,3703,114.3C3771.4,131,3840,212,3909,277.7C3977.1,343,4046,392,4114,343C4182.9,294,4251,147,4320,122.5C4388.6,98,4457,196,4526,220.5C4594.3,245,4663,196,4731,220.5C4800,245,4869,343,4903,392L4937.1,441L4937.1,490L4902.9,490C4868.6,490,4800,490,4731,490C4662.9,490,4594,490,4526,490C4457.1,490,4389,490,4320,490C4251.4,490,4183,490,4114,490C4045.7,490,3977,490,3909,490C3840,490,3771,490,3703,490C3634.3,490,3566,490,3497,490C3428.6,490,3360,490,3291,490C3222.9,490,3154,490,3086,490C3017.1,490,2949,490,2880,490C2811.4,490,2743,490,2674,490C2605.7,490,2537,490,2469,490C2400,490,2331,490,2263,490C2194.3,490,2126,490,2057,490C1988.6,490,1920,490,1851,490C1782.9,490,1714,490,1646,490C1577.1,490,1509,490,1440,490C1371.4,490,1303,490,1234,490C1165.7,490,1097,490,1029,490C960,490,891,490,823,490C754.3,490,686,490,617,490C548.6,490,480,490,411,490C342.9,490,274,490,206,490C137.1,490,69,490,34,490L0,490Z'
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
