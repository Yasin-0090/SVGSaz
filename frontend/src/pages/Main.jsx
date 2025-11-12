import React, { useState} from 'react'
import Header from '../components/Header'
import { MdColorLens, MdKeyboard, MdKeyboardArrowLeft } from 'react-icons/md'
import { BsFillImageFill , BsFolder} from 'react-icons/bs'
import { FaShapes , FaCloudUploadAlt } from 'react-icons/fa'

import { TfiText } from 'react-icons/tfi'
import { RxTransparencyGrid } from 'react-icons/rx'
import TemplateDesign from '../components/Main/TemplateDesign'
import CreateComponent from '../components/CreateComponent'
import Myimages from '../components/Myimages'
import Projects from '../components/Projects'
import Image from '../components/Image'

const Main = () => {
    
    const [state , setState] = useState('')
    const [current_component , setCurrentComponent] = useState()
    const [show , setShow]= useState({
        status : true,
        name  : ''
    })
    
    const setElement = (type , name)=>{
        setState(type)
        setShow({
            state : false,
            name
        })
    }

    const moveElement = ()=>{
        console.log('move');
        
    }

    const resizeElement =()=>{
       console.log('resizeElement');
    }
    
    const rotateElement =()=>{
       console.log('rotateElement');
    }

    const [components , setComponents] = useState([
        {
            name : "main_frame",
            typeof : "rect",
            id : Math.floor((Math.random()*100)+1),
            height : 450,
            width : 650,
            z_index :1 ,
            color : '#fff',
            image : '',
            setCurrentComponent : (a)=> setCurrentComponent(a)
        }
    ])
    
    const removeComponent =()=>{
        console.log('removeComponent');
    }

  return (

    <div className='min-w-screen h-screen bg-black'>
        <Header/>
        {/* Start Icon Sidebar */}
        <div className='flex h-[calc(100%-60px)] w-screen'>
            <div className='w-20 bg-[#18191b] z-50 h-full text-gray-400 overflow-y-auto'>

                <div onClick={()=>setElement('design' , 'design')} className={`${show.name === 'design' ? 'bg-[#252627]' : ''} w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-0 hover:text-gray-100`}>
                    <span className='text-3xl'><MdColorLens/></span>
                    <span className='text-xs font-medium'>Design</span>
                </div>

                <div onClick={()=>setElement('shape' , 'shape')} className={`${show.name === 'shape' ? 'bg-[#252627]' : ''} w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className='text-2xl'><FaShapes/></span>
                    <span className='text-xs font-medium'>Shapes</span>
                </div>

                <div onClick={()=>setElement('image' , 'uploadImage')} className={`${show.name === 'uploadImage' ? 'bg-[#252627]' : ''} w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className='text-2xl'><FaCloudUploadAlt/></span>
                    <span className='text-xs font-medium'>Upload</span>
                </div>

                <div onClick={()=>setElement('text' , 'text')} className={`${show.name === 'text' ? 'bg-[#252627]' : ''} w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className='text-2xl'><TfiText/></span>
                    <span className='text-xs font-medium'>Text</span>
                </div>

                <div onClick={()=>setElement('project' , 'projects')} className={`${show.name === 'projects' ? 'bg-[#252627]' : ''} w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className='text-2xl'><BsFolder/></span>
                    <span className='text-xs font-medium'>Project</span>
                </div>

                <div onClick={()=>setElement('initImages' , 'images')} className={`${show.name === 'images' ? 'bg-[#252627]' : ''} w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className='text-2xl'><BsFillImageFill/></span>
                    <span className='text-xs font-medium'>Images</span>
                </div>

                <div onClick={()=>setElement('background' , 'background')} className={` ${show.name === 'background' ? 'bg-[#252627]' : ''}w-full h-20 cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className='text-2xl'><RxTransparencyGrid/></span>
                    <span className='text-xs font-medium'>Background</span>
                </div>
            </div>

            {/* End of Icon Sidebar */}

            <div className='h-full w-[calc(100%-75px)]'>
                <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                    <div onClick={()=>setShow({name : '' , status : true})} className='flex absolute justify-center items-center bg-[#252627] w-5 -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'><MdKeyboardArrowLeft/></div>
                    {
                        state === 'design' && <div>
                            <div className='grid grid-cols-2 gap-2'>
                                <TemplateDesign/>
                            </div>
                        </div>
                    }
                    {
                        state === 'shape' && <div className='grid grid-cols-3 gap-2'>
                            <div className='h-[90px] bg-[#3c3c3d] cursor-pointer'>

                            </div>
                            <div className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'>

                            </div>
                            <div style={{clipPath:'polygon(50% 0,100% 100% , 0 100%)'}} className='h-[90px]  bg-[#3c3c3d] cursor-pointer'>

                            </div>
                        </div>
                    }
                    {
                        state === 'image' && <Myimages/>
                    }
                    {
                        state === 'text' && <div>
                            <div className='grid grid-cols-1 gap-2'>
                                <div className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white rounded-sm text-xl'>
                                    <h2>Add Text</h2>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        state === 'project' && <Projects/>
                    }
                    {
                        state === 'initImages' &&  <div className="h-[88vh] overflow-x-auto flex items-start justify-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <Image/>
                        </div>
                    }
                       {
                        state === 'background' && <div className="h-[88vh] overflow-x-auto flex items-start justify-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <div className='grid grid-cols-2 gap-2'>
                                {[
                                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 151, 16, 16, 6, 61, 3, 43, 3,
                                    4, 3, 3, 3, 6, 6,
                                ].map((img, i) => (
                                    <div
                                    key={i}
                                    className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
                                    >
                                    <img
                                        className="w-full h-full object-fill"
                                        src={`https://github.com/Yasin-0090/SVGSaz/blob/main/frontend/public/project.jpg?raw=true`}
                                        alt=""
                                    />
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div className='w-full flex h-full'>
                    <div className={`flex justify-center relative items-center h-full ${!current_component ? 'w-full' : 'w-[calc(100%-250px)] overflow-hidden'}`}>
                        <div className='max-w-[650px] max-h-[450px] flex justify-center items-center overflow-hidden'>
                            <div id='main_design' className='w-auto relative h-auto overflow-hidden'>
                                {
                                    components.map((c,i)=><CreateComponent key={i} info={c} current_component={current_component} removeComponent={removeComponent}/>)
                                }
                            </div>
                        </div>
                    </div>
                    {
                        current_component && <div className='h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2'>
                                Mahdi
                            </div> 
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main