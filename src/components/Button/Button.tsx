import Link from 'next/link'
import React from 'react'

function Button() {
  return (
    <Link href="#">
      <div className="px-5 py-3 rounded-md text-white bg-primary-clr">
        Reach out to us
      </div>
    </Link>
  )
}

export default Button
