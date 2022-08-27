import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="h-auto w-full bg-blueDark flex flex-col items-center text-white pl-10">
      <div className="h-full w-3/4 flex flex-row justify-center items-center my-[1rem] py-2 gap-8 border-b-2 border-grey">
        <div className="flex flex-col h-24 w-1/5">
          <h2 className="text-2xl font-bold">Trello</h2>
          <h3 className="text-footer-head">Log In</h3>
        </div>
        <div className="flex flex-col h-24 w-1/5  p-1 rounded-sm cursor-pointer hover:bg-blue-700 transition-all duration-300">
          <h3 className="text-footer-head">Trello</h3>
          <p className="text-footer">Whats behind the boards?</p>
        </div>
        <div className="flex flex-col h-24 w-1/5  p-1 rounded-sm cursor-pointer hover:bg-blue-700 transition-all duration-300">
          <h3 className="text-footer-head">Jobs</h3>
          <p className="text-footer">
            Learn about open roles on the Trello team.
          </p>
        </div>
        <div className="flex flex-col h-24 w-1/5  p-1 rounded-sm cursor-pointer hover:bg-blue-700 transition-all duration-300">
          <h3 className="text-footer-head">Apps</h3>
          <p className="text-footer">
            Download the Trello App for your Desktop or Mobile devices.
          </p>
        </div>
        <div className="flex flex-col h-24 w-1/5  p-1 rounded-sm cursor-pointer hover:bg-blue-700 transition-all duration-300">
          <h3 className="text-footer-head">Contact Us</h3>
          <p className="text-footer">
            Need anything? Get in touch and we can help.
          </p>
        </div>
      </div>
      <div className="h-16 w-3/4 flex flex-row items-center">
        <div className="w-1/6">English ^</div>
        <div className="flex flex-1 flex-row gap-2 items-center">
          <p className="text-footer">Privacy Policy</p>
          <p className="text-footer">Terms</p>
          <p className="text-footer">Cookie Settings</p>
          <p className="text-footer">Copyright @2022 Atlassian</p>
        </div>
        <div className="flex flex-row items-center w-1/5 justify-between relative">
          <Image
            className="cursor-pointer"
            src={require('../../public/images/instagram.png')}
            alt="facebook"
            height={25}
            width={25}
          />
          <Image
            className="cursor-pointer"
            src={require('../../public/images/twitter.png')}
            alt="facebook"
            height={25}
            width={25}
          />
          <Image
            className="cursor-pointer"
            src={require('../../public/images/facebook.png')}
            alt="facebook"
            height={25}
            width={25}
          />
          <Image
            className="cursor-pointer"
            src={require('../../public/images/linkedin.png')}
            alt="facebook"
            height={25}
            width={25}
          />
          <Image
            className="cursor-pointer"
            src={require('../../public/images/youtube.png')}
            alt="facebook"
            height={25}
            width={25}
          />
        </div>
      </div>
    </div>
  );
}
