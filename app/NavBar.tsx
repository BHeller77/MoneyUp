'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { LiaPiggyBankSolid } from "react-icons/lia";
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    console.log('Current Path:', currentPath);

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
            className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar