import * as React from 'react';
import { motion } from 'framer-motion';
import TechLink from './TechLink';
import ImageGalary from './ImageGalary';
import { toLighterHex } from '../utils/functions';

type displayIcons = {
  link: string | undefined;
  name: string;
  icon: React.ReactElement;
};

type props = {
  color: string;
  name: string;
  slogan: string;
  paragraph: string;
  githubLink: string | undefined;
  demoLink: Array<string> | undefined;
  images: Array<string>;
  links: Array<displayIcons>;
  imagePath: string;
  side: 'left' | 'right';
  demoText?: Array<string>;
};

const ProjectShowcase = ({
  name,
  slogan,
  paragraph,
  githubLink,
  demoLink,
  images,
  links,
  imagePath,
  side,
  color,
  demoText = ['Live App'],
}: props) => {
  const lighterHexColor = toLighterHex(color);
  return (
    <div
      id='project-showcase-container'
      className={
        side === 'right'
          ? `relative w-full h-full flex flex-col justify-center items-center sm:flex-row-reverse`
          : `relative w-full h-full flex flex-col justify-center items-center sm:flex-row`
      }
    >
      <div
        id='image-galary-container'
        className='h-1/2 md:h-full w-[90%] md:w-[70%] xl:w-3/5 flex justify-center items-center'
      >
        <ImageGalary images={images} />
      </div>
      <div className='h-1/2 md:h-full w-[90%] md:w-[30%] xl:w-2/5 flex justify-center items-center'>
        <div
          className={
            side === 'right'
              ? `bg-[#333333] w-full px-6 py-7 rounded-b-xl md:rounded-l-xl`
              : `bg-[#333333] w-full px-6 py-7 rounded-b-xl md:rounded-r-xl`
          }
        >
          <div className='w-full h-full flex flex-col gap-6'>
            <div
              id='logo-header-container'
              className='flex items-center h-20 gap-4'
            >
              <div className='w-16 h-16 xl:w-20 xl:h-20 rounded-lg flex justify-center items-center'>
                <a
                  href={demoLink?.length ? demoLink[0] : ''}
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    pointerEvents: demoLink === null ? 'none' : 'auto',
                  }}
                >
                  <img
                    className='rounded-lg bg-white'
                    src={imagePath}
                    alt={`${name}-logo`}
                    draggable={false}
                  />
                </a>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className='text-lg xl:text-xl font-bold text-white shadow-sm'>
                  {name}
                </h1>
                <h2 className='inline-block md:hidden xl:inline-block text-base text-[#ebebeb]'>
                  {slogan}
                </h2>
              </div>
            </div>
            <div
              id='tech-link-and-para-containter'
              className='flex flex-col gap-3'
            >
              <p className='text-sm xl:text-base text-[#e4e4e4] border-y-2 border-[#7a7a7a] py-5'>
                {paragraph}
              </p>
              <div id='tech-link-container' className='w-full'>
                <TechLink links={links} />
              </div>
            </div>
            <div
              id='button-container'
              className='w-full flex flex-col xl:flex-row justify-around gap-3 items-center'
            >
              {githubLink !== undefined ? (
                <motion.a
                  whileHover={{ borderColor: lighterHexColor }}
                  href={githubLink}
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    borderColor: color,
                  }}
                  className='w-[70%] min-w-[6rem] xl:w-28 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base border-[3px] bg-[#2a2a2a] flex justify-center items-center'
                >
                  GitHub
                </motion.a>
              ) : (
                void 0
              )}
              {demoLink === undefined
                ? void 0
                : demoLink?.map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{
                        backgroundColor: lighterHexColor,
                      }}
                      href={link}
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        backgroundColor: color,
                      }}
                      className={`w-[70%] min-w-[6rem] xl:w-28 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base flex justify-center items-center shadow-md`}
                    >
                      {demoText[index]}
                    </motion.a>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
