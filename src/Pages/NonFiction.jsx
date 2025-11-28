import React from 'react'
import { BookOnePage, Footer, HeaderOne } from '../Componenets'
import HeroBannerSection from '../Componenets/HeroBannerSection'
import { Children1, Children2, FictionOne, FictionTwo } from '../assets'

const NonFiction = () => {
  return (
    <>
     <HeaderOne/>

     <section className=''>
      <HeroBannerSection title1="Explore the Ideas" title2="Shaping Our World" description="A handpicked selection of powerful nonfiction that shapes minds and sparks conversations.
From groundbreaking memoirs to big-idea books that challenge how you see the world—every title is a game-changer.
Perfect for curious readers who want deep insights, fresh perspectives, and stories that stay with you long after the last page" btn1="Explore Our Collection" btn2="Discover New Releases" imgOne={FictionOne} imgTwo={FictionTwo}/>
     </section>

<section>
    <BookOnePage/>
</section>

<Footer/>
    
    </>
  )
}

export default NonFiction