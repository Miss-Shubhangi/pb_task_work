import React from 'react'

function About() {
  return (
    <>
    <section id="about">
    <div className='w-full max-w-xl mx-10 auto px-4 md:px-8 lg:px-20 m-8 text-left'>
  <h1 className='text-violet-500 font-semibold text-lg md:text-l lg:text-xl m-4'>ABOUT</h1>
  <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-bold'>
    About <br />
    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; (PBwebcrafts)
  </h1>

  <p className='text-sm md:text-base lg:text-lg text-black mt-4'>
    At PBwebcrafts, we are the architects of your digital success. Specializing in website development and digital marketing, we bring innovation and creativity to the forefront. Our team is dedicated to crafting seamless online experiences that propel your brand forward. Whether it's through captivating websites or strategic digital campaigns, we transform ideas into impactful realities. With a passion for precision and a commitment to excellence, PBwebcrafts is your trusted partner for a thriving digital presence.
  </p>

  <p className='text-sm md:text-base lg:text-lg text-black mt-4'>
    Services:
    <ul className='list-none ml-6'>
      <li>- Website Development</li>
      <li>- Digital Growth Solution</li>
      <li>- Application Development</li>
    </ul>
  </p>

  <p className='text-sm md:text-base lg:text-lg text-black mt-4'>
    Elevate your brand with PBwebcrafts – where every pixel tells a story, and every strategy builds success.
  </p>
</div>
</section>
    </>
  )
}

export default About