import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <div className='w-full h-[70vh] mt-16 bg-gradient-to-b from-purple via-blueLight to-transparent'>
    <div className='h-[70vh] section justify-between items-center  w-full  flex flex-row'>
        <div className="hero-text w-2/3 h-full flex flex-col justify-center gap-3">
            <h1 className='text-[2.5rem] font-semibold tracking-wide leading-[3rem]'>Trello helps teams move work <br className='hidden xl:block'></br> forward.</h1>
            <p className='text-regular mb-6 w-5/6'>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
            <div className='w-[80%] h-10 gap-4 mb-3 flex flex-row'>
                <input type={'email'} placeholder={"Email"} className="w-3/5  text-sm rounded-md border focus:border-slate-700 border-slate-300 px-3 placeholder:text-slate-600 outline-none"></input>
                <button className='btn btn-blue w-1/5'>Sign Up</button>
            </div>
            <span className='h-8 relative flex w-full flex-row items-center gap-2 text-blue'><p className='underline'>Watch Video</p><FontAwesomeIcon className='w-3 h-3' icon={faPlay} /> </span>
        </div>
        <div className="hero-img h-[50vh] bg-cover w-96 relative">
            <Image className='object-contain' layout='fill' alt='hero' src={require('../../public/images/hero.webp')}/>
        </div>
    </div>
    </div>
  )
}
