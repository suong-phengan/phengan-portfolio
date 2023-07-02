import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import chatbotImg from '../public/assets/projects/chatbot.jpg'
import shopifyImg from '../public/assets/projects/shopify.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='py-8 w-full h-auto flex justify-center items-center flex-row gap-12'>
          <ProjectItem
            title='Chatbot Ordering System'
            backgroundImg={chatbotImg}
            projectUrl='/netflix'
            tech='Golang, Redis, Typescript, Firebase'
          />
          <ProjectItem
            title='Shopify App Development'
            backgroundImg={shopifyImg}
            projectUrl='/twitch'
            tech='Golang, AWS Lambda, AWS RDS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
