import About from '@/components/About/About'
import Blogs from '@/components/Blogs/Blogs'
import HeroSection from '@/components/HeroSection/HeroSection'
import React from 'react'
import HotServices from '@/components/HotServices/HotServices'
import PreviousResults from '@/components/PreviousResults/PreviousResults'
import VideosSection from '@/components/Videos/VideosSection'
import TopArticles from '@/components/TopArticles/TopArticles'
import MedicalCrew from '@/components/MedicalCrew/MedicalCrew'
import AddReview from '@/components/AddReview/AddReview'
import Reviews from '@/components/Reviews/Reviews'
import ContactUs from '@/components/ContactUs/ContactUs'
import Services from '@/components/Services/Services'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Blogs />
      <About />
      <Services />
      <HotServices />
      <PreviousResults />
      <VideosSection />
      <TopArticles />
      <MedicalCrew />
      <Reviews />
      <AddReview />
      <ContactUs />
    </>
  )
}

export default Home;