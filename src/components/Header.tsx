import React from 'react'
import { H1, H2, H3 } from './Text/Heading'
import Image from 'next/image'
import Paragraph from './Text/Paragraph'
import Button from './Button/Button'

function Header() {
  return (
    <div className="flex py-10 justify-between space-x-10">
      <div className="flex flex-col flex-grow space-y-6">
        <H1 styles={{ color: 'var(--light-gray)' }}>
          Welcome to Cyntronex, <br></br> Where Ideas Take Shape and Innovations
          Comes to Life
        </H1>
        <Paragraph styles={{ lineHeight: '1.8rem', color: 'var(--dark-gray)' }}>
          Cyntronex is a dynamic and forward-thinking company with a strong
          commitment to providing high-quality solutions to our clients. Our
          team brings a wealth of experience in the technology and design
          industry, which has allowed us to build a reputation for excellence
          and reliability. At Cyntronex, we excel in product design with core
          competencies in mechanical design, mechanical engineering, materials
          science, manufacturing process optimization, and simulation analysis.
          Our team`&apos;`s expertise ensures efficient, compliant, and
          innovative solutions for your product design needs.
        </Paragraph>
        <Button>Learn more</Button>
      </div>
      <div className="lg:flex hidden flex-shrink-0 w-[50%] h-[50%] min-w-[20rem]">
        <Image
          src="/assets/hero_img.jpg"
          alt="hero-img"
          width={900}
          height={700}
        />
      </div>
    </div>
  )
}

export default Header
