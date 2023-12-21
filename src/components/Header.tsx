import React from 'react'
import { H1, H2, H3 } from './Text/Heading'
import Image from 'next/image'
import Paragraph from './Text/Paragraph'
import Button from './Button/Button'
import { data } from '@/data/data'

function Header() {
  const { header } = data
  const brandName = 'Cyntronex'
  const dynamicHeading = header.heading.replace(
    '[brand]',
    `<span style="color: var(--primary-clr)">${brandName}</span>`
  )

  return (
    <section
      className="flex py-10 justify-between space-x-10 pb-[8rem]"
      id="about"
    >
      <div className="flex flex-col flex-grow space-y-6">
        <H1
          styles={{ color: 'var(--light-gray2)', maxWidth: '90%' }}
          dangerouslySetInnerHTML={{ __html: dynamicHeading }}
        />

        <Paragraph>{header.tagLine[0]}</Paragraph>
        <Paragraph
          styles={{
            lineHeight: '1.8rem',
            color: 'var(--dark-gray)',
          }}
        >
          {header.tagLine[1]}
        </Paragraph>
        <Button>Learn more</Button>
      </div>
      <div className="lg:flex hidden flex-shrink-0 w-[50%] min-w-[20rem]">
        <Image
          src="/assets/hero_img.jpg"
          alt="hero-img"
          width={900}
          height={900}
        />
      </div>
    </section>
  )
}

export default Header
