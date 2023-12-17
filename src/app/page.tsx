import Button from '@/components/Button/Button'
import CardWithIcon from '@/components/Card/CardWithIcon'
import CardWrapper from '@/components/Card/CardWrapper'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Wrapper from '@/components/Wrapper'
import { H1, H2 } from '@/components/Text/Heading'
import Paragraph from '@/components/Text/Paragraph'
import { data } from '@/data/data'

export default function Home() {
  const { homePage: home } = data

  return (
    <>
      <Navbar />

      <Wrapper styles={{ background: 'var(--bg-gray)' }}>
        <Header />
      </Wrapper>
    </>
  )
}
