import { data } from '@/data/data'
import React from 'react'

function Menu() {
  const {
    header: { navLinks },
  } = data
  return (
    <ul className="text-primary-clr bg-white shadow-2xl rounded-2xl flex flex-col justify-start items-start absolute right-[-3rem]">
      {navLinks.map((navLink) => {
        return (
          <>
            <div
              key={navLink.name}
              className=" hover:bg-primary-clr-light1 hover:text-white w-[14rem] p-5 text-center"
            >
              {/* px-6 py-2 */}
              <li>{navLink.name}</li>
            </div>
            <div className="w-[70%] mx-auto border border-solid border-bg-light-gray h-0"></div>
          </>
        )
      })}
    </ul>
  )
}

export default Menu
