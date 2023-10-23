import Button from '@/components/Button/Button'
import CardWithIcon from '@/components/Card/CardWithIcon'
import CardWrapper from '@/components/Card/CardWrapper'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { H1 } from '@/components/Text/Heading'
import Paragraph from '@/components/Text/Paragraph'
import { data } from '@/data/data'

export default function Home() {
  const { homePage: home } = data

  return (
    <>
      <Navbar />
      <PageWrapper>
        <div className="flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-6">
          <CardWrapper
            styles={{
              padding: '3rem',
              // backgroundImage: `url('/assets/bg.png')`,
              // backgroundPosition: 'center',
              // backgroundSize: 'cover',
            }}
          >
            <div className="flex flex-col justify-end h-full">
              <H1>
                <div className="text-primary-clr w-[73%]">
                  {home.headerSection.heading}
                </div>
              </H1>
              <Paragraph>{home.headerSection.description[0]}</Paragraph>
              <Paragraph styles={{ padding: '1.5rem 0' }}>
                {home.headerSection.description[1]}
              </Paragraph>
              <Button>{home.headerSection.buttonText}</Button>
            </div>
          </CardWrapper>

          {/* card sections */}
          <div className="grid-4_4 mt-6 lg:mt-0">
            {home.headerSubSection.map((data, index) => {
              return (
                <div className={`hs-card-${index}`} key={index}>
                  <CardWithIcon {...data} />
                </div>
              )
            })}
          </div>
        </div>
      </PageWrapper>
    </>
  )
}
