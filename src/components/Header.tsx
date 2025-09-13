"use client";

import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import { useState } from 'react';
import { HeaderProps } from '@/types';
import Link from 'next/link';

export default function Header({ menuItems }: HeaderProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50 h-16 bg-white
      ${open ? 'bg-[#170038]' : 'bg-white'}
  `}
      >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative text-xl h-full">
      <Image src={logo} alt="Logo" width={160} height={29} />
      <button
      className={`md:hidden relative z-50 focus:outline-none ${
        open ? 'text-white' : 'text-[#170038]'
      }`}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      >
      <div className="relative w-6 h-6">
      <svg
      className={`absolute top-0 left-0 w-6 h-6 transition-opacity duration-200 text-[#FF4D00] ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      
      <svg
      className={`absolute top-0 left-0 w-6 h-6 transition-opacity duration-200 ${
        open ? 'opacity-0' : 'opacity-100'
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </div>
      </button>
      
      <nav
      className={`
        fixed left-0 w-full z-40 md:pr-10
        md:static md:h-auto md:w-auto md:flex md:items-center md:bg-transparent md:text-[#170038]
        transition-transform duration-300 ease-in-out
        ${open ? 'block bg-[#170038]' : 'hidden md:block'}
      `}
        style={{
          top: '64px',
          height: 'calc(100vh - 64px)',
        }}
        >
        <ul
        className={`
          flex flex-col justify-start h-full space-y-2
          md:flex-row md:space-y-0 md:space-x-6 md:h-auto md:justify-start
          ${open ? 'text-white' : 'text-[#170038] text-base'}
          md:text-[#170038]
        `}
          >
          {menuItems.map((item, i) => (
            <li key={i}>
            <Link
            href={item.url}
            className="block p-4 hover:text-[#FF4D00] text-xl md:text-base"
            onClick={() => setOpen(false)}
            >
            {item.name}
            </Link>
            
            </li>
          ))}
          </ul>
          </nav>
          </div>
          </header>
        );
      }