import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-black bg-opacity-80 h-60 w-full mt-28'>

    <div className='w-8/12 mx-auto text-gray-500 py-10'>
        <h4>Questions? Call 000-800-919-1694</h4>
        <div className='flex flex-wrap py-8 text-xs gap-y-6 font-semibold justify-start'>
            <p className='w-52'>FAQ</p>
            <p className='w-52'>Help Center</p>
            <p className='w-52'>Terms of use</p>
            <p className='w-52'>Privacy</p>
            <p className='w-52'>Cookie Preferences</p>
            <p className='w-52'>Corporate Information</p>
        </div>
    </div>
    </div>
  )
}

export default Footer