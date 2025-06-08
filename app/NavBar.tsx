import Link from 'next/link'
import React from 'react'
import { LiaPiggyBankSolid } from "react-icons/lia";

const NavBar = () => {
const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Transactions', href: '/transactions' },
]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center text-xl'>
        <Link href="/"><LiaPiggyBankSolid size={42} /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
            key={link.href} 
            className='text-zinc-500 hover:text-zinc-800 transition-colors' 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar