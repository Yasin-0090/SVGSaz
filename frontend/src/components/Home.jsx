import React, {useState } from "react";
import { FaTrash } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link , useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
      width: 0,
      height: 0
  })
    const [show , setShow] = useState(false);
    const inputHandle = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mdtablet: {
            breakpoint: { max: 992, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };
    const create = ()=>{
        navigate('/design/create' ,{
            state : {
                type : 'create',
                width : state.width,
                height : state.height
            }
        })
    }   
  return (
    <div className='pt-5'>

        {/*ُStart Custome size button */}

        <div className='w-full flex justify-center items-center h-[250px] bg-linear-to-r from-[#00c4cc] via-[#8b3dff] to-[#5533ff] relative rounded-md overflow-hidden'>
            
            <button onClick={()=>setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] absolute top-3 right-3'>
                Custome size
            </button>

            <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-50'} transition-all duration-500`}>

                <div className='grid grid-cols-2 pb-4 gap-3'>
                    <div className='flex gap-2 justify-center items-start flex-col'>
                        <label htmlFor="width">Width</label>
                        <input onChange={inputHandle} type="number" name="width" id="width" className='w-full outline-none px-2 py-1 bg-[#1b1a1a] border border-[#404040] rounded-md'/>
                    </div>
                    <div className='flex gap-2 justify-center items-start flex-col'>
                        <label htmlFor="height">Height</label>
                        <input onChange={inputHandle} type="number" name="height" id="height" className='w-full outline-none px-2 py-1 bg-[#1b1a1a] border border-[#404040] rounded-md'/>
                    </div>
                </div>

                <button onClick={create} className='px-4 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] w-full'>
                    Create new design
                </button>
            </div>
            <div className="">
                <h2 className="text-3xl pb-10 pt-6 font-semibold text-white">What will you design today?</h2>
            </div>
        </div>

        {/* End Custome size button */}

        {/* Start Recent Design */}

        <div>
            <h2 className="text-xl py-6 font-semibold text-white">
                Your recent designs
            </h2>
            <div>
                <Carousel autoPlay={true} infinite={true} responsive={responsive} transitionDuration={500}>
                    {
                        [1,2,3,4,5,6,7,8].map((d,i)=><div key={i} className="realative group w-full h-[170px] px-2 ">
                            <Link className="w-full h-[150px] block bg-[#ffffff12] p-4 rounded-md">
                                <img className="w-full h-full object-cover object-[center_-50px] rounded-md overflow-hidden" src="https://github.com/Yasin-0090/SVGSaz/blob/main/frontend/public/project.jpg?raw=true" alt="" />
                            </Link>
                            <div className="absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-500 group-hover:block">
                                <FaTrash/>
                            </div>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>

        {/* End Recent Design */}

    </div>
  )
}

export default Home