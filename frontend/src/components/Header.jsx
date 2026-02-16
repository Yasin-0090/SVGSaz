import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { exportToSVG } from '../utils/exportSVG';
import api from '../utils/api'
import * as htmlToImage from 'html-to-image';
import toast from 'react-hot-toast'
// const Header = () => {
  
//     const saveImage = () =>{

//     }
// const Header = ({ components = [] }) => {  // components رو از Main می‌گیریم

   
   
//   return (
//     <div className='h-[60px] bg-linear-to-r from-[#212122] via-[#2728b] to-[#2a2b2c] w-full'>
//         <div className='flex justify-between px-10 items-center text-gray-100 h-full'>
//             <Link to={'/'}>
//                 <span className="text-4xl font-medium bg-linear-to-r from-[#00c4cc] via-[#8b3dff] to-[#5533ff] text-transparent bg-clip-text">
//                     SVGSaz
//                 </span>
//             </Link>
//             <span className='text-xl'>Design Svg</span> 
//             <div className='flex justify-center items-center gap-2 text-gray-300'>
//                 <button  className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'>Save</button>
//                 <button onClick={downloadImage} className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'>Download</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header


















const Header = ({components , design_id}) => {
const [loader , setLoader] = useState(false)

const saveImage = async() =>{
    const getDiv = document.getElementById('main_design')
    const image = await htmlToImage.toBlob(getDiv)
    if(image){
        const obj = {
            design: components
        }
        const formData = new FormData()
        formData.append('design' , JSON.stringify(obj))
        formData.append('image' , image)
        try {

            setLoader(true)
            const {data} = await api.put(`/api/update-user-design/${design_id}`,formData)
            toast.success(data.message)
            setLoader(false)

        } catch (error) {

            setLoader(false)
            toast.error(error.response.data.message)
        }
    }

}

 const downloadImage = () => {
        if (!components || components.length === 0) {
            alert("طراحی خالی است!")
            return
        }

        // ساخت SVG واقعی
        const svgString = exportToSVG(components, 650, 450)

        // دانلود
        const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = `SVGSaz-${new Date().toLocaleDateString('fa-IR').replace(/\//g, '-')}.svg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }




// const downloadImage = async () => {

//         const getDiv = document.getElementById('main_design')
//         const dataUrl = await htmlToImage.toPng(getDiv, {
//             style: {
//                 transform: 'scale(1)'
//             }
//         })

//         var link = document.createElement("a");
//         link.download = 'image';
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//     }
    
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
                <button disabled={loader} onClick={saveImage} className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'>{loader ? 'Loading...' : 'Save'}</button>
                <button onClick={downloadImage} className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default Header
