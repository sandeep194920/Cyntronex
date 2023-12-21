'use client'

import Image from 'next/image'
import Button from './Button/Button'
import { useState } from 'react'
import Menu from './Menu'
import { data } from '@/data/data'
import { handleScroll } from '@/utils/scrollUtil'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const {
    header: { navLinks },
  } = data
  return (
    <nav className="flex justify-between p-10 px-16 items-center border border-b-2 shadow-sm">
      <Image
        src="./assets/logo/transparent.svg"
        alt="cyntronex-logo"
        width={200}
        height={200}
      />
      <div className="hidden lg:visible lg:flex space-x-14 items-center">
        <ul className="flex space-x-14 text-black-text">
          {/* <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Our Work</li> */}

          {navLinks.slice(0, navLinks.length - 1).map((navLink) => {
            return (
              <li
                className="cursor-pointer border-transparent hover: border-b hover:border-primary-clr-light1"
                onClick={() => handleScroll(navLink.link)}
                key={navLink.name}
              >
                {navLink.name}
              </li>
            )
          })}
        </ul>
        <Button onClick={() => handleScroll('contact')}>Reach out to us</Button>
      </div>
      <div
        onMouseOver={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className="visible lg:hidden group cursor-pointer relative"
      >
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        {showMenu && <Menu />}
      </div>
    </nav>
  )
}

export default Navbar
