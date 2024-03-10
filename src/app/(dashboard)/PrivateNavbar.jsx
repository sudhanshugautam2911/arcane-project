import Link from 'next/link'
import React from 'react'
import { FaUserAlt } from "react-icons/fa";

const PrivateNavbar = () => {
    return (
        <div className='bg-primary text-white h-20 flex justify-between items-center px-10 md:px-20'>
            <div>
                <a href="/" className="flex items-center">
                    <img src="/ourlogo.png" alt='logo' className='w-16 object-contain' />
                    <h1 className='font-semibold text-lg md:text-xl cursor-pointer text-white'>OptiHealth Cuisine</h1>
                </a>
            </div>
            <div>
                <Link href="/profile">
                    <FaUserAlt className='text-3xl' />
                </Link>
            </div>
        </div>
    )
}

export default PrivateNavbar