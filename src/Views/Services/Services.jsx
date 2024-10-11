import React from 'react'
import  WebsiteBuildingIcon from "../../assets/mobile-coding.png"
import AppDevlopment from "../../assets/real-estate.png"

function Services() {
  return (
   <>
   <div className='text-center p-6 '>
      <h2 className='text-center text-xl text-violet-600 m-5'>SERVICES</h2>
      <h1 className='text-4xl text-violet-700 font-bold '><span>We Will Give What WE </span>
          <br></br>
     <span>Have The Best</span> </h1>

     <div className='min-h-screen grid place-items-center lg:-mt-20 lg:-mb-32'>
      <div className='grid md:grid-cols-3 gap-24 '>
          <div className='container m-auto'>
          <img className='h-24 w-24 m-auto' src={WebsiteBuildingIcon}/>
          <h2 className='text-black m-2 font-semibold'> Website Building</h2>
          <p className='mx-10 '>
          Revolutionize your online presence with our expert website development services.
           We specialize in custom designs, responsive solutions, and seamless functionality.
            Elevate your business – contact us today!"
          </p>
          </div>

          <div>
          <img className='h-24 w-24 m-auto' src={WebsiteBuildingIcon}/>
          <h2 className='text-black m-2 font-semibold'>Digital Growth Solution </h2>
          <p className='mx-10'>
          "Transform your digital presence with our expert marketing solutions.
           From strategic campaigns to impactful online strategies, we elevate your brand's visibility.
           Take the lead in the digital landscape – partner with us!"
          </p>
          </div>

          <div>
          <img className='h-24 w-24 m-auto' src={WebsiteBuildingIcon}/>
          <h2 className='text-black m-2 font-semibold'>App Devlopment </h2>
          <p className='mx-10'>
          "Capture moments that last a lifetime! Book our professional photoshoot services for stunning visuals and timeless memories.
           From events to portraits, we bring your vision to life. Contact us to schedule your photoshoot today!"
          </p>
          </div>
      </div>
     </div>
   </div>


{/* zero............ */}
<div className='bg-blue-950 text-white p-8'>
  <h1 className='text-center font-bold text-2xl md:text-4xl my-4'>
    Just Every Journey Begin with ZERO
  </h1>

  <div className='flex  justify-center text-center font-bold m-1 text-4xl md:text-3xl lg:text-7xl md:px-14 lg:px-48'>
    <div className='px-4 mb-4'>
      <span>2</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
    <span className='px-2 hidden md:inline'>.</span>
    <div className='px-4 mb-4'>
      <span>22</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
    <span className='px-2 hidden md:inline'>.</span>
    <div className='px-4 mb-4'>
      <span>15</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
    <span className='px-2 hidden md:inline'>.</span>
    <div className='px-4 mb-4'>
      <span>0</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
  </div>
</div>
   </>
  )
}

export default Services