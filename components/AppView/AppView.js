import React from 'react';
import Image from 'next/image';

export default function AppView() {
  return (
    <div className='section min-h-screen h-auto  flex-col gap-4 items-center mt-10 p-5'>
        <h1 className="text-header">
            It&apos;s more than work. It&apos;s a way of working together.
        </h1>
        <p className="text-regular text-center w-4/5 mb-8">Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
        <button className='btn btn-blue'>Start Doing</button>
        <div className='relative  h-[40rem] w-5/6 p-0 m-0'>
            <Image className='object-contain m-0 p-0' alt='app' layout='fill' src={require('../../public/images/app-view.webp')} />
        </div>
    </div>
  )
}
