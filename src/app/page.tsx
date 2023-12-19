import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Wrapper from '@/components/Wrapper'
import FeatureCards from '@/components/FeatureCards'
import Products from '@/components/Products'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper styles={{ background: 'var(--bg-gray)' }}>
        <Header />
      </Wrapper>
      <FeatureCards />
      <Products />
      <Services />
    </>
  )
}
