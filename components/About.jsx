import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import MyselfImg from '../public/assets/KIT_phengan.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            My software engineering career began in 2020. I have 3 years of experience
            developing chatbot ordering system by using open source and proprietary tools
            such as Dialogflow, RASA and Deepavlov. I experience in building and integrating
            APIs using Golang, Typescript, Postgresql, Redis, MongoDB. Extensive knowledge in
            using Git, Linux, Docker, AWS services such as RDS, Lambda and cloudwatch.
            Though I am mostly involve with Chatbot - Backend development, I am also familair
            with frontend tools such as React, Next, Tailwind. I believe that to become
            a good developer is to be flexible with tech stack that we are using in order to
            deliver sustainable solution to the clients.  
          </p>
          <p className='py-4 text-gray-600'>
            Apart from chatbot ordering system and backend development, I experienced in 
            developing Shopify application for integrating with other shopify app store called TBS
            (Ticket Booking System) using. I also involve with backbone system architecture
            design using UML, System Flow Chart and ER diagram.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={MyselfImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
