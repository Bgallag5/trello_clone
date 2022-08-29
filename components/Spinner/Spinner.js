import React from 'react'

export default function Spinner() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='spinner'>
            <div className='spinner-middle middle-1'></div>
            <div className='spinner-middle middle-2'></div>
            <div className='spinner-middle middle-3'></div>
            <div className='spinner-middle middle-4'></div>
        </div>
    </div>
  )
}
