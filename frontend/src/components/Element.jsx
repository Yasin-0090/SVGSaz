import React from 'react'

const Element = ({id, info , exId}) => {
  return (
    <>
    {
        exId ? 
        <>
            <div onMouseDown={()=>info.resizeElement(exId , info)} className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-2.5 h-2.5 cursor-nwse-resize bg-green-500 z-99999'>

            </div>
            <div onMouseDown={()=>info.resizeElement(exId , info)} className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-2.5 h-2.5 cursor-nwse-resize bg-green-500 z-99999'>

            </div>
            <div onMouseDown={()=>info.resizeElement(exId , info)} className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-2.5 h-2.5 cursor-nwse-resize bg-green-500 z-99999'>

            </div>
        </> 
        : 
        <>
            <div onMouseDown={()=>info.resizeElement(id , info)} className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-2.5 h-2.5 cursor-nwse-resize bg-green-500 z-99999'>

            </div>

            <div onMouseDown={()=>info.resizeElement(id , info)} className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-2.5 h-2.5 cursor-nwse-resize bg-green-500 z-99999'>

            </div>

            <div onMouseDown={()=>info.resizeElement(id , info)} className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-2.5 h-2.5 cursor-nwse-resize bg-green-500 z-99999'>

            </div>
        </>
    }
    
        <div onMouseDown={()=>info.rotateElement(id , info)} className='hidden absolute group-hover:block -top-[3px] -left-[3px] w-2.5 h-2.5 translate-[-50%,0%] bg-green-500 z-99999 cursor-nwse-resize'>

        </div>

        <div onMouseDown={()=>info.moveElement(id , info)} className='hidden absolute group-hover:block -top-[3px] left-[50%] w-2.5 h-2.5 translate-[-50%,0%] bg-green-500 z-99999 cursor-nwse-resize'>

        </div>

        <div onMouseDown={()=>info.moveElement(id , info)} className='hidden absolute group-hover:block top-[50%] -left-[3px] w-2.5 h-2.5 translate-[-0%,50%] bg-green-500 z-99999 cursor-nwse-resize'>

        </div>

        <div onMouseDown={()=>info.moveElement(id , info)} className='hidden absolute group-hover:block top-[50%] -right-[3px] w-2.5 h-2.5 translate-[-0%,50%] bg-green-500 z-99999 cursor-nwse-resize'>

        </div>

        <div onMouseDown={()=>info.moveElement(id , info)} className='hidden absolute group-hover:block -bottom-[3px] left-[50%] w-2.5 h-2.5 translate-[-50%,0%] bg-green-500 z-99999 cursor-nwse-resize'>

        </div>
    </>
  )
}

export default Element