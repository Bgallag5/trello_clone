import React, { useRef } from 'react';
import Image from 'next/image';

export default function Feature(props) {
  const { head, title, text, src, classList } = props;

  //show hidden content of a specific element
  const showHiddenContent = (e) => {
    let hiddenDiv = e.target.parentNode.lastElementChild;

    if (hiddenDiv.classList.contains('content-visible')) {
      hiddenDiv.classList.remove('content-visible');
      return;
    }

    //reveal hidden content
    hiddenDiv.classList.add('content-visible');
    //smooth scroll content into frame
    hiddenDiv.scrollIntoView({behavior: 'smooth', block: 'center'})
  };


  return (
    <div
      className={`${classList} w-[65rem]  gap-8 flex flex-row mx-auto min-h-72 h-auto my-12`}
    >
      <div className="flex flex-col w-3/5 p-1">
        <h5 className='text-blueDark'>{head}</h5>
        <h1 className="text-header text-blueDark mb-4">{title}</h1>
        <p className="text-regular-light  leading-6">{text}</p>
        <div className="h-auto mt-[10%]">
          <span
            onClick={(e) => showHiddenContent(e)}
            className="w-auto cursor-pointer text-lg font-[600] text-blueDark"
          >
            + Learn More
          </span>
          <div
            id="hidden-content"
            className="learn-more--content w-full opacity-0 flex flex-col gap-4  h-0 transition-all duration-500 text-[1rem] font-[400]"
          >
            <p className='w-5/6 mt-4'>
              Spin up a Trello card with a click, then uncover everything it can
              hold. Break down bigger card tasks into steps with file attachment
              previews, reminders, checklists and comments—emoji reactions
              included! Plus, gain powerful perspective by seeing all cards by
              list and status at the board level.
            </p>
            <p>Your Team Can:</p>
            <ul className='list-disc ml-8'>
              <li>Manage deadline</li>
              <li>Provide and track feedback</li>
              <li>Assign tasks and hand off work</li>
              <li>Connect work across apps</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-2/5 relative h-72">
        <Image
          className="object-contain  shadow-sm shadow-black"
          layout="fill"
          alt="feature"
          src={require(`../../public/images/${src}`)}
        />
      </div>
    </div>
  );
}
