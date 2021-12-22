import Link from 'next/link'
// import {MoonIcon,SunIcon} from '@heroicons/react/solid'
// import { useState,useEffect } from 'react'
// import { useTheme } from "next-themes" 

const Header = () => {
   
    return (
        <header className="bg-gray-800 p-3 flex justify-between w-screen">
            <h1 className="text-gray-100 text-2xl">NEWS</h1>
            <nav className="flex space-x-4">
                <Link href="/login" className="nav-link">Login </Link>
                <Link href="/signup" className="nav-link">Signup </Link>
                
            </nav>
        </header>
    )
}

export default Header
