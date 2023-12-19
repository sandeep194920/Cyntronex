import React from 'react'
import CardWithIcon from './Card/CardWithIcon'
import { data } from '@/data/data'
import { H2, H3, H4, H6 } from './Text/Heading'
import Wrapper from './Wrapper'
import Paragraph from './Text/Paragraph'

function Services() {
  const {
    servicesOffered: { services, title },
  } = data

  const servicesJsx = services.map((service, index) => {
    return (
      <>
        <H3 styles={{ textAlign: 'center' }} key={index}>
          {service.title}
        </H3>
        <Paragraph styles={{ color: 'var( --black-text)', fontSize: '1.1rem' }}>
          {service.desc}
        </Paragraph>

        <div className="services-grid bg-light-gray gap-14 px-[2.5%] py-5 my-6">
          {service.categories.map((serv) => {
            return (
              <div key={serv.title}>
                <div className="flex flex-col justify-center">
                  <H6>{serv.title}</H6>
                  <div className="border-b border-primary-clr my-3"></div>

                  <Paragraph>{serv.desc}</Paragraph>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  })

  return (
    <>
      <H2>{title}</H2>
      <Wrapper>{servicesJsx}</Wrapper>
    </>
  )
}

export default Services
