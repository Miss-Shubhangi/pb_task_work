import React from 'react'
import Header from '../../Components/Header/Header'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
  <Header/>
   

   {/* heading.... */}
   <div className='bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-100 p-6'>
    <h1 className='text-center font-bold text-5xl'>
      <span className='text-black'>PBwebcraft:</span><br></br>
      <span  className='text-white '>"Elevating</span>  <span className='text-purple-700'>Digital Expressionces</span>
      <span className='text-white'>&nbsp;with <br></br> Precision and Innovation"</span>
      </h1>
      <br></br>
      <div className='flex flex-col'>
      <h4 className='text-black  text-xl drop-shadow-2xl font-semibold text-center p-6 '>Crafting Digital Brilliance for Tomorrow's Success</h4>
      <button className='text-white bg-black hover:bg-slate-600  py-2 px-4 mx-auto rounded-full mb-12 font-thin '>Learn More</button>
    </div>
   </div>
   
   <Services/>

   <About/> 
   
   <Contact/>

   
   </>
  )

}


export default Home