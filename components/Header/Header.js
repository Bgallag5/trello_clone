import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';

export default function Header() {
    const [tab, setTab ] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState()


    function handleToggleDropdown(e){
        let newTab = e.target.dataset.tab;

        if (e.target.dataset.tab === tab){
            // setTab(prev => undefined)
            setDropdownVisible(prev => !prev)
            return    
        }

        setDropdownVisible(true)
        console.log(newTab, dropdownVisible);
        setTab(newTab)
    }

    useEffect(() => {
        let tabs = document.querySelectorAll('.nav-item');
        tabs.forEach(tab => {
            tab.addEventListener('mouseover', (e) =>{
                handleToggleDropdown(e);
                return
        })
        })
    }, [])
    useEffect(() => {
        // let tabs = document.querySelectorAll('.nav-item');
        let backdrop = document.querySelector('.dropdown--backdrop')
        backdrop.addEventListener('mouseover', (e) => {
            // alert('Mouse Over')
            // if (dropdownVisible){

                setDropdownVisible(false)
            // }
        })
    }, [])


  return (
    <>
    <div className={`header fixed top-0 left-0 shadow-md bg-white h-16 pl-8 w-full flex flex-row justify-between`}>
        <div className='flex flex-row h-full w-auto items-center'>
            <div className='h-full w-36 relative'>
                <Image className='object-cover' layout='fill' src={Logo} alt="logo" />
            </div>
            <nav className='ml-6 h-full'>
                <ul className='flex flex-row gap-4 h-full items-center text-[.8rem] font-medium'>
                    <li onClick={(e) => handleToggleDropdown(e)} data-tab={"features"} className={`nav-item ${tab === 'features' && dropdownVisible ? 'nav-item--active' : ""}`}>Features <FontAwesomeIcon className='w-3 h-3 mt-[-5%] dropdown-carrot' icon={faAngleDown} /> </li>
                    <li onClick={(e) => handleToggleDropdown(e)} data-tab={"solutions"} className={`nav-item ${tab === 'solutions' && dropdownVisible  ? 'nav-item--active' : ""}`}>Solutions <FontAwesomeIcon className='w-3 h-3 mt-[-5%] dropdown-carrot' icon={faAngleDown} /> </li>
                    <li onClick={(e) => handleToggleDropdown(e)} data-tab={"plans"} className={`nav-item ${tab === 'plans' && dropdownVisible  ?  'nav-item--active' : ""}`}>Plans <FontAwesomeIcon className='w-3 h-3 mt-[-5%] dropdown-carrot' icon={faAngleDown} /> </li>
                    <li onClick={(e) => handleToggleDropdown(e)} data-tab={"pricing"} className={`nav-item ${tab === 'pricing' && dropdownVisible  ? 'nav-item--active' : ""}`}>Pricing</li>
                    <li onClick={(e) => handleToggleDropdown(e)} data-tab={"resources"} className={`nav-item ${tab === 'resources' && dropdownVisible  ? 'nav-item--active' : ""}`}>Resources <FontAwesomeIcon className='w-3 h-3 mt-[-5%] dropdown-carrot' icon={faAngleDown} /> </li>
                </ul>
            </nav>
        </div>
        <div className='flex flex-row h-full w-auto items-center'>
            <button className='btn h-full bg-white w-24 text-blueDark hover:bg-slate-200'>Log in</button>
            <button className='btn bg-blue-600 text-white h-full w-40 hover:bg-blue-800'>Get Trello Free</button>
        </div>
    </div>
        <HeaderDropdown tab={tab} dropdownVisible={dropdownVisible} />
        <div onClick={() => setDropdownVisible(false)} className={`dropdown--backdrop ${dropdownVisible ? "backdrop--active" : ''}`}></div>
    </>
  )
}
