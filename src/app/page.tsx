import Button from '@/components/Button/Button'
import CardWrapper from '@/components/Card/CardWrapper'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import H1 from '@/components/Text/Heading'
import Paragraph from '@/components/Text/Paragraph'
import { data } from '@/data/data'

export default function Home() {
  const { homePage: home } = data
  return (
    <>
      <Navbar />

      <PageWrapper>
        <CardWrapper
          styles={{
            padding: '3rem',
            width: '40rem',
            // backgroundImage: `url('/assets/bg.png')`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
          }}
        >
          <H1>
            <div className="text-primary-clr w-[72%] mb-6 mt-36">
              {home.mainSection.heading}
            </div>
          </H1>
          <Paragraph>{home.mainSection.description[0]}</Paragraph>
          <Paragraph styles={{ padding: '1.5rem 0' }}>
            {home.mainSection.description[1]}
          </Paragraph>
          <Button>{home.mainSection.buttonText}</Button>
        </CardWrapper>
      </PageWrapper>
    </>
  )
}
