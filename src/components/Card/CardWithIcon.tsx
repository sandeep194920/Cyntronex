import React from 'react'
import CardWrapper from './CardWrapper'
import { H4 } from '../Text/Heading'
import Paragraph from '../Text/Paragraph'
import { CardWithIcon as CardWithIconInterface } from '@/utils/Interfaces'
import { GiBulletBill } from 'react-icons/gi'
import Image from 'next/image'

function CardWithIcon({ ...props }: CardWithIconInterface) {
  const { heading, description, image, styles } = props

  let desc
  if (typeof description === 'string') {
    desc = <Paragraph>{description}</Paragraph>
  } else {
    desc = description.map((desc: string, index: number) => {
      return (
        <div key={index} className="flex space-x-4 items-center">
          <div className="text-2xl my-3 text-primary-clr">
            <GiBulletBill />
          </div>
          <Paragraph>{desc}</Paragraph>
        </div>
      )
    })
  }

  return (
    <CardWrapper
      styles={{
        height: '100%',
        minWidth: '25rem',
        maxWidth: '25rem',
        ...styles,
      }}
    >
      <Image src={image} width={50} height={50} alt="img" />

      <H4>
        <div className="text-primary-clr my-3">{heading}</div>
      </H4>
      {desc}
    </CardWrapper>
  )
}

export default CardWithIcon
