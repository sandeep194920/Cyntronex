import React from 'react'
import CardWithIcon from './Card/CardWithIcon'
import { data } from '@/data/data'
import { HiListBullet } from 'react-icons/hi2'
import Image from 'next/image'
import { H2 } from './Text/Heading'

function FeatureCards() {
  const { featureCards } = data

  return (
    <>
      <H2
        styles={{
          textAlign: 'center',
          marginTop: '3rem',
          letterSpacing: '1px',
        }}
      >
        Strategic Engineering Nexus
      </H2>
      <div className="flex w-[80%] mx-auto my-10 flex-wrap lg:justify-between gap-8 justify-center">
        {featureCards.map((card, index) => {
          return (
            <div key={index} className="flex">
              <CardWithIcon
                icon={card.icon}
                description={card.description}
                heading={card.heading}
                image={card.img}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FeatureCards
