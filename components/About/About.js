import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="section p-5 h-64 w-full mt-20 mb-10 border-t-2 border-b-2 border-grey/50">
      <div className="about-item">
        <Image
          className="w-1/3 h-1/2"
          height={100}
          width={70}
          src={require('../../public/images/about-icon1.svg')}
        />
        <div className="w-2/3 h-full flex flex-col">
          <h2 className="text-subheader">See Trello pricing</h2>
          <p className="text-small flex-1">
            Whether you&apos;re a team of 2 or 2,000, Trello can be customized
            for your organization. Explore which option is best for you.
          </p>
          <button className="btn btn-blue w-3/5">
            Compare Pricing
          </button>
        </div>
      </div>
      <div className="about-item">
        <Image
          className="w-1/3 h-1/2"
          height={100}
          width={70}
          src={require('../../public/images/about-icon2.svg')}
        />
        <div className="w-2/3 h-full flex flex-col">
          <h2 className="text-subheader">What is Trello?</h2>
          <p className="text-small flex-1">
          Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.
          </p>
          <button className="btn btn-blue w-3/5">
            Tour Trello
          </button>
        </div>
      </div>
      <div className="about-item">
        <Image
          className="w-1/3 h-1/2"
          height={100}
          width={70}
          src={require('../../public/images/about-icon3.svg')}
        />
        <div className="w-2/3 h-full flex flex-col">
          <h2 className="text-subheader">Discover Trello Enterprise</h2>
          <p className="text-small flex-1">
          The productivity tool teams love, paired with the features and security needed for scale.
          </p>
          <button className="btn btn-blue w-3/5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
