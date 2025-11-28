import React from 'react'
import {  Footer, HeaderOne,  } from '../Componenets'

import HeroBannerSection from '../Componenets/HeroBannerSection'
import NewReleaseBookComponent from '../Componenets/NewReleaseBookComponenet'

const NewReleaseBook = () => {
  return (
<>
<HeaderOne/>
<section>
    <HeroBannerSection title1='Hot Off the Press' title2='New Releases' description='Stay ahead of the curve with a fresh selection of new releases across every genre.
From rising debut authors to renowned bestsellers, these titles are shaping trends and sparking conversations.
Dive into stories that challenge perspectives, ignite creativity, and open doors to unforgettable new worlds.' />
  
</section> 

<NewReleaseBookComponent/>
<Footer/>
</>
  )
}

export default NewReleaseBook