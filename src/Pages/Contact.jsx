import React from 'react'
import HeaderOne from '../Componenets/HeaderOne'
import { AboutSection, ContactForm, EmailForm, Footer } from '../Componenets'

const Contact = () => {
  return (
   <>
   <HeaderOne/>
  <section className='mt-[5%]'>
     <ContactForm/>
  </section>
   <section className='mt-[5%]'>
    <EmailForm/>
   </section>
   <Footer/>
   </>
  )
}

export default Contact