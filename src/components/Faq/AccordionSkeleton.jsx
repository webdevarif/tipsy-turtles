import React from 'react'

const AccordionSkeletion = () => {
  return (
    <div className='rounded-[10px] bg-slate-100 b-[30px] p-[30px] mb-6'>
      <div className="animate-pulse grid grid-cols-[1fr_50px] items-center">
        <div>
            <div className="w-1/3 mb-4 h-4 rounded bg-slate-200"></div>
            <div className="w-1/2 h-6 rounded bg-slate-200"></div>
        </div>
        <span className="inline-block rounded-full w-10 h-10 bg-slate-200"></span>
      </div>
    </div>
  )
}

export default AccordionSkeletion