import React from 'react'
import Image from './Image'

const Myimages = () => {
  return (
    <div>
        <div className='w-full h-10 flex items-center justify-center bg-purple-500 rounded-sm text-white mb-3'> 
            <label className='text-center cursor-pointer' htmlFor="image">Uplaod image</label>
            <input type="file" name="" id="image" className='hidden'/>
        </div>
        <div className='h-[80vh] overflow-x-auto flex items-start justify-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
            <Image/>
        </div>
    </div>
  )
}

export default Myimages