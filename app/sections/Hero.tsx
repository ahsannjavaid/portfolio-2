import React, { useEffect, useState } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';
import GradientButton from '../components/GradientButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { BsWhatsapp } from 'react-icons/bs';

function Hero() {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'iOS Developer',
    'Android Developer',
    'Desktop Developer',
    'Graphic Designer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((roleIndex) => roleIndex + 1);
    }, 3500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className='flex justify-center items-center flex-col gap-10 py-10'>
      <div className='inline-block'>
        <div
          className='bg-[#01529a] text-base w-max rounded-2xl'
          id='welcome-im-box'
        >
          <p className='py-1 px-4'>Assalam-u-Alaikum!</p>
        </div>
      </div>
      <div
        id='image-thingy'
        className='flex flex-col justify-center items-center relative w-full'
      >
        <div className='scale-[0.8] lg:scale-100 relative border-[#526fa9] border-[0.7rem] h-56 w-56 shadow-lg shadow-[#333333]'>
          <div className='absolute h-56 w-56 border-[#526fa9] border-b-[0.7rem] top-[-0.7rem] left-[-0.7rem] z-20'></div>
          <div className='bg-gradient-radial from-[#8a8a8a] to-[#bcbcbc] w-60 h-60 rounded-full absolute top-[-1.7rem] left-[-1.2rem]'></div>
          <div id='Image Container' className='absolute'>
            <img
              className='object-cover'
              src='images/MyProfilePicture-removebg-preview.png'
              alt="Ahsan's avatar"
            />
          </div>
        </div>
        <div
          id='name-text-button-container'
          className='flex flex-col items-center gap-2'
        >
          <div id='name-container'>
            <h1 className='bg-clip-text text-transparent text-[2.3rem] lg:text-[2.5rem] xl:text-[2.6rem] font-bold bg-gradient-to-r from-[#09C6F9] to-[#5472FB] lg:pt-2'>
              Ahsan Javed
            </h1>
          </div>
          <ReactTextTransition springConfig={presets.gentle} inline>
            <h1 className='text-xl'>{roles[roleIndex % roles.length]}</h1>
          </ReactTextTransition>
          <div className='flex items-center justify-center gap-3 text-lg mt-6'>
            <GradientButton
              icon={<TbMailFilled />}
              url={
                'https://mail.google.com/mail/?view=cm&fs=1&to=ahsannjavaid@gmail.com'
              }
            />
            <GradientButton
              icon={<FaLinkedin />}
              url={'https://www.linkedin.com/in/ahsan-javed-b7272821a'}
            />
            <GradientButton
              icon={<BsWhatsapp />}
              url={'https://wa.me/923154807718'}
            />
            <GradientButton
              icon={<FaGithub />}
              url={'https://github.com/ahsannjavaid'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
