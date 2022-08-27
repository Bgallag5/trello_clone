import React from 'react';
import Image from 'next/image';
import Feature from './Feature';

export default function Features() {
  return (
    <div className="section flex-col mb-48">
      <div className="w-2/5 ml-[5%] h-72 ">
        <h1 className="text-header text-blueDark mb-4">
          Features to help your team succeed
        </h1>
        <p className="text-regular text-blueDark leading-6">
          Powering a productive team means using a powerful tool (and plenty of
          snacks). From meetings and projects to events and goal setting,
          Trello’s intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
      </div>
      <Feature
        title={'The board is just the beginning'}
        head={'Choose a view'}
        src={'features1.svg'}
        classList={'!flex-row-reverse'}
        text={`Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.`}
      />
      <Feature
        title={'Cards contain everything you need'}
        head={'DIVE INTO THE DETAILS'}
        src={'features2.svg'}
        classList={''}
        text={`Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.`}
      />
      <Feature
        title={'No-code automation'}
        head={'MEET YOUR NEW BUTLER'}
        src={'features3.webp'}
        classList={'!flex-row-reverse'}
        text={`Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.`}
      />
      <Feature
        title={'POWER-UPS'}
        head={'Integrate top work tools'}
        src={'features4.webp'}
        classList={''}
        text={`Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.`}
      />
    </div>
  );
}
