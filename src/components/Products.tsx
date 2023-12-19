import React from 'react'
import { H2, H3 } from './Text/Heading'
import Paragraph from './Text/Paragraph'
import Image from 'next/image'
import Wrapper from './Wrapper'
import { data } from '@/data/data'

function Products() {
  const {
    productsOffered: { title, products },
  } = data
  return (
    <>
      <H2>{title}</H2>
      <Wrapper>
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="flex justify-between px-[2.5%] py-5 mb-5 bg-light-gray gap-3"
            >
              <div className="flex flex-col max-w-[80%]">
                <H3>{product.heading}</H3>
                <Paragraph>{product.description}</Paragraph>
              </div>
              <div className="w-[30rem] h-[10rem] relative">
                <div className="absolute inset-0">
                  <Image
                    src={product.img}
                    alt={product.img}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </Wrapper>
    </>
  )
}

export default Products
