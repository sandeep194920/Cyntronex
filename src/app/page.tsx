'use client'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Wrapper from '@/components/Wrapper'
import FeatureCards from '@/components/FeatureCards'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import { scroller } from 'react-scroll'
import ContactUs from '@/components/ContactUs'
import Modal from '@/components/Modal'

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
      <ContactUs />
      <Footer />
    </>
  )
}
