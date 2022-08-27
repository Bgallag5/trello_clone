import React from 'react';
import Image from 'next/image';

export default function Companies() {
  return (
    <div className="section flex-col items-center mb-24  w-[55%]">
      <h2 className="text-regular mb-10">
        Join over 2,000,000 teams worldwide that are using Trello to get more
        done.
      </h2>
      <div className="flex flex-row gap-1 relative h-28 w-full mb-4">
        <div className="relative w-1/4 h-3/4 ">
          <Image
            className=""
            alt="logo"
            layout="fill"
            src={require('../../public/images/logo1.svg')}
          />
        </div>
        <div className="relative w-1/4 h-3/4 ">
          <Image
            className="object-contain"
            alt="logo"
            layout="fill"
            src={require('../../public/images/logo2.svg')}
          />
        </div>
        <div className="relative w-1/4 h-3/4 ">
          <Image
            className="object-contain"
            alt="logo"
            layout="fill"
            src={require('../../public/images/logo3.svg')}
          />
        </div>
        <div className="relative w-1/4 h-3/4 ">
          <Image
            className="object-contain"
            alt="logo"
            layout="fill"
            src={require('../../public/images/logo4.svg')}
          />
        </div>
      </div>
      <div className="flex flex-row gap-1 relative justify-center h-28 w-full ">
        <div className="relative w-1/4 h-3/4 ">
          <Image
            className="object-contain"
            alt="logo"
            layout="fill"
            src={require('../../public/images/logo5.svg')}
          />
        </div>
        <div className="relative w-1/4 h-3/4 ">
          <Image
            className="object-contain"
            alt="logo"
            layout="fill"
            src={require('../../public/images/logo6.webp')}
          />
        </div>
      </div>
    </div>
  );
}
