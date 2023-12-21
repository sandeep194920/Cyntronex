import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'
import Paragraph from './Text/Paragraph'

function Footer() {
  return (
    <Wrapper styles={{ background: 'var(--bg-gray)' }}>
      <footer className="border border-b-2 shadow-sm bg-bg-gray">
        <Image
          className="py-10"
          src="./assets/logo/transparent.svg"
          alt="cyntronex-logo"
          width={100}
          height={100}
        />
        <div className="flex justify-center">
          <Paragraph
            styles={{ color: 'var(--light-gray2)', fontSize: '0.8rem' }}
          >
            &copy; 2023 <span className="text-primary-clr">Cyntronex</span>. All
            rights reserved.
          </Paragraph>
        </div>
      </footer>
    </Wrapper>
  )
}

export default Footer
