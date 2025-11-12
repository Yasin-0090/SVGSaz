import React from 'react'

const TemplateDesign = () => {
  return (
    <>
    {
        [1,2,3,4].map((d,i)=><div className='group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer'>
            <img className="w-full h-full rounded-md overflow-hidden" src="https://github.com/Yasin-0090/SVGSaz/blob/main/frontend/public/project.jpg?raw=true" alt="" />
        </div>)
    }
    </>
  )
}

export default TemplateDesign