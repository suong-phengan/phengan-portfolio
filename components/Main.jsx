import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            BRING DIGITAL IDEA TO LIFE
          </p> */}
          <h1 className='py-4 text-gray-700'>
            Hi, My name is <span className='text-[#5651e5]'> PhengAn</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Chatbot - Backend Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I&#39;m focused on developing chatbot mainly on Messenger,
            full hand experience with backend development and product
            development cycle.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/pheng-an-suong-05a2491a9/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/suong-phengan'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='https://t.me/phengan_penguino'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsTelegram />
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
