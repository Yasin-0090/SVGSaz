import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import CreateComponent from './CreateComponent';
const CreateDesign = () => {
    const {state} = useLocation()
    const ref = useRef()
    const obj = {
        name : "main_frame",
        typeof : "rect",
        id : Math.floor((Math.random()*100)+1),
        height : state.height,
        width : state.width,
        z_index :1 ,
        color : 'green',
        image : ''
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
        <div ref={ref} className='relative h-auto w-auto overflow-auto'>
            <CreateComponent current_component={{}} info={obj}/>
        </div>
    </div>
  )
}

export default CreateDesign