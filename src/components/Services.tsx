import React from 'react'
import { data } from '@/data/data'
import { H2, H3, H4, H6 } from './Text/Heading'
import Wrapper from './Wrapper'
import Paragraph from './Text/Paragraph'
import Image from 'next/image'

function Services() {
  const {
    servicesOffered: { services, title },
  } = data

  const servicesJsx = services.map((service, index) => {
    return (
      <>
        <div className=" flex items-center space-x-3">
          <Image src={service.img} width={50} height={50} alt="img" />
          <H3
            styles={{
              marginTop: '2rem',
              marginBottom: '2rem',
              color: 'var(--primary-clr)',
              textTransform: 'uppercase',
            }}
            key={index}
          >
            {service.title}
          </H3>
        </div>
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
