import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAreaChart } from '@fortawesome/free-solid-svg-icons';

export default function HeaderDropdown(props) {

    const {tab, dropdownVisible} = props
console.log(tab, dropdownVisible);

  return (
    <div className={`header-dropdown ${dropdownVisible ? 'dropdown--active' : ""}`}>
        <div data-tab={"features"} className={`${tab === 'features' ? "content-active" : ''} dropdown-content`}>
            <div className='dropdown-left  left-box--text'>
                <p className='dropdown__header mb-2 grid-col-span-3'>Explore the features that help your team succeed</p>
                <div className='left-box  left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Views</p>
                    <p className='left-box--text dropdown__text'>View your team's projects from every angle.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Automation</p>
                    <p className='left-box--text dropdown__text'>Automate tasks and workflows with Butler automation.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Power-Ups</p>
                    <p className='left-box--text dropdown__text'>Power up your teams by linking their favorite tools with Trello plugins.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Templates</p>
                    <p className='left-box--text dropdown__text'>Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Integrations</p>
                    <p className='left-box--text dropdown__text'>Find the apps your team is already using or discover new ways to get work done in Trello.</p>
                </div>
            </div>
            <div className='dropdown-right bg-violet-100'>
                <p className=' right-1 dropdown__header'>
                    Meet Trello
                </p>
                <p className='right-box right-2 dropdown__text  mt-2'>
               {" Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity awaits."}  
                </p>
                <div className='right-box right-3'>
            <button className='right-box--btn'>Check out Trello</button>
                </div>
            </div>
        </div>
        <div data-tab={"solutions"} className={`${tab === 'solutions' ? "content-active" : ''} dropdown-content`}>
            <div className='dropdown-left  left-box--text'>
                <p className='dropdown__header mb-2 grid-col-span-3'>Solutions for you</p>
                <div className='left-box  left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Views</p>
                    <p className='left-box--text dropdown__text'>View your team's projects from every angle.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Automation</p>
                    <p className='left-box--text dropdown__text'>Automate tasks and workflows with Butler automation.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Power-Ups</p>
                    <p className='left-box--text dropdown__text'>Power up your teams by linking their favorite tools with Trello plugins.</p>
                </div>
                <div className='left-box left-box-1'>
                    <FontAwesomeIcon className='left-box--icon text-sm w-5' icon={faAreaChart}>icon</FontAwesomeIcon>
                    <p className='left-box--title'>Templates</p>
                    <p className='left-box--text dropdown__text'>Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.</p>
                </div>
            </div>
            <div className='dropdown-right bg-violet-100'>
                <p className=' right-1 dropdown__header'>
                    Meet Trello
                </p>
                <p className='right-box right-2 dropdown__text  mt-2'>
               {" Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity awaits."}  
                </p>
                <div className='right-box right-3'>
            <button className='right-box--btn'>Check out Trello</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}
