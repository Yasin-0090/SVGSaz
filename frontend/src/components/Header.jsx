import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const saveImage = () =>{

    }
    const downloadImage= () =>{

    }
  return (
    <div className='h-[60px] bg-linear-to-r from-[#212122] via-[#2728b] to-[#2a2b2c] w-full'>
        <div className='flex justify-between px-10 items-center text-gray-100 h-full'>
            <Link to={'/'}>
                <span className="text-4xl font-medium bg-linear-to-r from-[#00c4cc] via-[#8b3dff] to-[#5533ff] text-transparent bg-clip-text">
                    SVGSaz
                </span>
            </Link>
            <span className='text-xl'>Design Svg</span> 
            <div className='flex justify-center items-center gap-2 text-gray-300'>
                <button onClick={saveImage} className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'>Save</button>
                <button onClick={downloadImage} className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default Header