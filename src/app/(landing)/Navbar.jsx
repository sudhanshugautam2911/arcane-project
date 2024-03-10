import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-primary text-white h-20 flex justify-between items-center px-2 md:px-20'>
            <div>
                <Link href="/" className='flex items-center'>
                    <img src="/ourlogo.png" alt='logo' className='w-16 object-contain' />
                    <h1 className='font-semibold text-lg md:text-xl cursor-pointer'>OptiHealth Cuisine</h1>
                </Link>
            </div>
            <div>
                <Link href="/recipe">
                    <button className='font-medium cursor-pointer text-base md:text-lg text-black bg-white px-5 py-2 rounded-full'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar