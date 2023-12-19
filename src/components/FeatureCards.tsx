import React from 'react'
import CardWithIcon from './Card/CardWithIcon'
import { data } from '@/data/data'
import { H2 } from './Text/Heading'

function FeatureCards() {
  const {
    featureCards: { features, title },
  } = data

  return (
    <>
      <H2>{title}</H2>
      <div className="flex w-[80%] mx-auto my-10 flex-wrap lg:justify-between gap-8 justify-center">
        {features.map((card, index) => {
          return (
            <div key={index} className="flex">
              <CardWithIcon
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
