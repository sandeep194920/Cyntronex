import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Wrapper from '@/components/Wrapper'
import FeatureCards from '@/components/FeatureCards'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

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
      <Footer />
    </>
  )
}
