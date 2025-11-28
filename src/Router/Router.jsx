import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, BestSeller, BookPage, CategoreiesPage, Contact, Home, KidsChildrenBooks, NewReleaseBook, NonFiction } from '../Pages'


const Router = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
 <Route path='/' element={<Home/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/contact' element={<Contact/>} />
 <Route path='/books' element={<BookPage/>} />
 <Route path='/categories' element={<CategoreiesPage/>} />
 <Route path='/best-seller' element={<BestSeller/>} />
 <Route path='/new-release' element={<NewReleaseBook/>} />
 <Route path='/kids-children-books' element={<KidsChildrenBooks/>} />
 <Route path='/non-fiction' element={<NonFiction/>} />


    </Routes>
   </BrowserRouter>
   </>
  )
}

export default Router
