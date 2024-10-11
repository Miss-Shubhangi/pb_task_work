import React from 'react'
import Plancard from '../../components/PlanPricing/Plancard.jsx'

function PlanPricing() {
  return (<>
    <div className='block m-12  '> <h2 className=" text-[#1a1a42] text-6xl font-semibold text-center ">Choose your pricing </h2>
    <h2 className=" text-[#1a1a42] text-6xl font-semibold text-center ">plan</h2>
    </div>
    <div className=' flex flex-wrap flex-row justify-center md:space-x-7 mb-[100px] '>
       <Plancard planLevel={`BASIC PLAN`} planPrice={`5,000`} planContent={`26 DESIGNS + 4 REELS + MANAGEMENT + 1 PAID AD RUN`}/>
       <Plancard planLevel={`INTERMEDIATE`} planPrice={`10,000`} planContent={`18 DESIGNS + 12 REELS + MANAGEMENT + 1 PAID AD RUNS + 1 BASIC VIDEO SHOOT`}/>
       <Plancard planLevel={`PRO`} planPrice={`15,000`} planContent={`10 DESIGNS + 20 REELS + 2 VIDEO SHOOTS + MANAGEMENT + 1 PAID AD RUNS + DESIGN SUPPORT`}/>
    </div>
    </>
  )
}

export default PlanPricing