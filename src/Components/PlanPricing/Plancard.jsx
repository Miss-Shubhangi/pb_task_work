import React from 'react'

function Plancard({planLevel , planPrice , planContent }) {
  return (
    <div className='container relative w-[260px] p-6 h-[380px] border  mt-7 rounded-sm border-slate-300 text-center items-center'>
        <h3 className='font-light text-xl'>DIGITAL MARKETING</h3>
        <h4 className='font-light text-xl pb-1'> ({planLevel})</h4>
        ₹<h1 > <span className='lining-nums font-normal text-6xl '>{planPrice}</span></h1>
        <p className='text-sm pb-3'>Every month</p>
        <p className='font-light text-base pb-4'> {planContent}</p>

        <button className=' bg-[#9e3ffd] w-[80%] py-3 text-white rounded-sm hover:bg-[#9e84b8] absolute bottom-5 left-6'>Select</button>
    </div>
  )
}
export default Plancard