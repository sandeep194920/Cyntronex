import Button from '@/components/Button/Button'
import CardWithIcon from '@/components/Card/CardWithIcon'
import CardWrapper from '@/components/Card/CardWrapper'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { H1, H2 } from '@/components/Text/Heading'
import Paragraph from '@/components/Text/Paragraph'
import { data } from '@/data/data'

export default function Home() {
  const { homePage: home } = data

  return (
    <>
      <Navbar />

      {/* SECTION - 1 */}
      <PageWrapper>
        <div className="flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-6">
          <CardWrapper
            styles={{
              padding: '3rem',
              minWidth: '49%',
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

        {/* SECTION - 2 */}
        <div className="flex flex-col md:space-x-6 justify-between flex-wrap md:flex-nowrap md:flex-row">
          <CardWrapper
            styles={{
              padding: '3rem',
              marginTop: '3rem',
            }}
          >
            <div className="flex flex-col">
              <H2>
                <div className="text-primary-clr w-[73%]">Cyntronex</div>
              </H2>
              <Paragraph styles={{ padding: '1.5rem 0' }}>
                Enginuity is Canada's dynamic engineering and design group,
                we're on a mission to make a profound impact. From a basement
                operation to a powerhouse team of over 50 innovative experts, we
                tackle complex technical challenges, delivering tailor-made
                solutions that enhance the world. Driven by curiosity, we place
                your challenges at the heart of our operations. Through our
                unique matrix managed, focussed team structure, we strategically
                apply our expertise to ensure outstanding results. We manage the
                inherent risks of research and development by thoroughly
                examining your idea from idea, through concept and prototyping
                to fabrication. If the necessary technologies don't exist, we
                design them; if we lack expertise, we source it. With us, you're
                not just procuring an engineering group; you're gaining a
                committed partner in innovation.
              </Paragraph>
              <Button>{home.headerSection.buttonText}</Button>
            </div>
          </CardWrapper>

          <CardWrapper
            styles={{
              padding: '3rem',
              marginTop: '3rem',
            }}
          >
            <div className="flex flex-col">
              <H2>
                <div className="text-primary-clr w-[73%]">
                  {home.aboutSection.heading}
                </div>
              </H2>
              <Paragraph styles={{ padding: '1.5rem 0' }}>
                {home.aboutSection.description}
              </Paragraph>
              <Button>{home.aboutSection.buttonText}</Button>
            </div>
          </CardWrapper>
        </div>
      </PageWrapper>
    </>
  )
}
