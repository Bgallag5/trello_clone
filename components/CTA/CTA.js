import React from 'react'

export default function CTA() {
  return (
    <div className='mx-auto w-[55%] h-48 bg-gradient-to-b text-center from-indigo-700 to-blue-500 rounded-md mb-24 flex flex-col items-center justify-around -translate-y-[33%]'>
        <h3 className='text-[1.2rem] text-white font-[500] tracking-wide'>Sign up and get started with Trello today. A world of productive teamwork awaits!</h3>
        <div className='h-1/3 w-1/2 mx-auto'>
        <input type={'email'} placeholder={"Email"} className="w-3/5 h-10 text-sm rounded-md border focus:border-slate-700 border-slate-300 px-3 placeholder:text-slate-600 outline-none"></input>
            <button className='w-auto btn btn-white ml-4'>Sign Up</button>
        </div>
    </div>
  )
}
