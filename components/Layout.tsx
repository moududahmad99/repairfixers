import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import Service from './Service'
import Review from './Review'
import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
// import TextSlider from './TextSlider'
import ServiceItems from './ServiceItems'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div >
      <Navbar />
      <Banner />
      <Service />
      <WhyUs />
      <Testimonials />
      <Review />
      {/* <TextSlider /> */}
      <ServiceItems />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout