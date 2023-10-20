import { WrapperProps, WrapperWithStyles } from '@/utils/Interfaces'
import Link from 'next/link'
import React from 'react'

function Button({ children, styles }: WrapperWithStyles) {
  return (
    <Link href="#">
      <div
        style={{ ...styles }}
        className="px-5 py-3 rounded-md text-white bg-primary-clr w-fit"
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
