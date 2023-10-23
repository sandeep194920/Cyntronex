import React, { ReactNode } from 'react'
import CardWrapper from './CardWrapper'
import { H2 } from '../Text/Heading'
import Paragraph from '../Text/Paragraph'
import { CardWithIcon } from '@/utils/Interfaces'

function CardWithIcon({ ...props }: CardWithIcon) {
  const { heading, description, icon } = props

  return (
    <CardWrapper
      styles={{
        padding: '1.7rem',
        height: '100%',
      }}
    >
      {icon && (
        <div className="text-5xl flex justify-center my-3 text-primary-clr">
          {icon}
        </div>
      )}
      <H2>
        <div className="text-primary-clr mb-3">{heading}</div>
      </H2>
      <Paragraph>{description}</Paragraph>
    </CardWrapper>
  )
}

export default CardWithIcon
