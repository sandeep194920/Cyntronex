import Button from '@/components/Button/Button'
import CardWrapper from '@/components/Card/CardWrapper'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { H1, H2 } from '@/components/Text/Heading'
import Paragraph from '@/components/Text/Paragraph'
import { data } from '@/data/data'

export default function Home() {
  const { homePage: home } = data
  const subCardStyles = {
    padding: '1.7rem',
    minHeight: '18rem',
  }
  return (
    <>
      <Navbar />

      <PageWrapper>
        {/* <div className="flex space-x-11"> */}
        {/* header */}
        <div className="header-container">
          <div className="header-card">
            <CardWrapper
              styles={{
                padding: '3rem',
                // maxWidth: '40rem',
                // backgroundImage: `url('/assets/bg.png')`,
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
              }}
            >
              <H1>
                <div className="text-primary-clr w-[73%] mb-6 pt-36">
                  {home.headerSection.heading}
                </div>
              </H1>
              <Paragraph>{home.headerSection.description[0]}</Paragraph>
              <Paragraph styles={{ padding: '1.5rem 0' }}>
                {home.headerSection.description[1]}
              </Paragraph>
              <Button>{home.headerSection.buttonText}</Button>
            </CardWrapper>
          </div>

          {/* card sections */}

          <div className="hs-card-0">
            <CardWrapper styles={{ ...subCardStyles }}>
              <H2>
                <div className="text-primary-clr mb-4">
                  {home.headerSubSection[0].heading}
                </div>
              </H2>
              <Paragraph>{home.headerSubSection[0].description}</Paragraph>
            </CardWrapper>
          </div>

          <div className="hs-card-1">
            <CardWrapper styles={{ ...subCardStyles }}>
              <H2>
                <div className="text-primary-clr mb-4">
                  {home.headerSubSection[1].heading}
                </div>
              </H2>
              <Paragraph>{home.headerSubSection[1].description}</Paragraph>
            </CardWrapper>
          </div>

          <div className="hs-card-2">
            <CardWrapper styles={{ ...subCardStyles }}>
              <H2>
                <div className="text-primary-clr mb-4">
                  {home.headerSubSection[2].heading}
                </div>
              </H2>
              <Paragraph>{home.headerSubSection[2].description}</Paragraph>
            </CardWrapper>
          </div>
          <div className="hs-card-3">
            <CardWrapper styles={{ ...subCardStyles }}>
              <H2>
                <div className="text-primary-clr mb-4">
                  {home.headerSubSection[3].heading}
                </div>
              </H2>
              <Paragraph>{home.headerSubSection[3].description}</Paragraph>
            </CardWrapper>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}
