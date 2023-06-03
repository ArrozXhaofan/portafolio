"use client"

import { AiFillApple } from "react-icons/ai";
import {useState,useEffect} from 'react'

export default function Nav() {

    const [claseNav, setClaseNav] = useState(['rotate-90 translate-y-2','rotate-90','-translate-y-[950px]'])
    const [logicNav, setLogicNav] = useState(true)

    function changeNav(){

        if (logicNav) {
            setClaseNav(['rotate-90 absolute','rotate-90 translate-y-2','-translate-y-[950px]'])
            
            setLogicNav(!logicNav)
        }
        else{

            
            setClaseNav(['rotate-45 absolute','-rotate-45',''])
            setLogicNav(!logicNav)
        }
    }

    useEffect(() => {
    setClaseNav(['rotate-90 absolute','rotate-90 translate-y-2','-translate-y-[950px]'])
    }, [])
    

  return (
    <nav className="select-none w-full flex justify-center bg-black text-[#B1B1B1] z-50">

      <div className="max-w-7xl flex px-5 md:p-0 justify-between md:justify-around w-full h-14 items-center">

        <div className="flex items-center gap-1 text-2xl group">
          <AiFillApple className="group-hover:text-red-500 duration-500" />
          <span className="group-hover:text-red-500 duration-500">
            Developer
          </span>
        </div>

        <ul className="hidden md:flex gap-x-7">
            <li className="hover:text-white duration-500 ease-in-out">My Apps</li>
            <li className="hover:text-white duration-500 ease-in-out">Skills & Tools</li>
            <li className="hover:text-white duration-500 ease-in-out">Xperience</li>
            <li className="hover:text-white duration-500 ease-in-out">Contact</li>
        </ul>

        <button className="text-2xl md:hidden relative text-[#B1B1B1] flex flex-col gap-0" onClick={()=>{changeNav()}}>
            <div className={`border border-[#B1B1B1] h-5 ${claseNav[0]} transition-all duration-500 ease-in-out`}></div>
            <div className={`border border-[#B1B1B1] h-5 ${claseNav[1]} transition-all duration-500 ease-in-out`}></div>
        </button>        
      </div>

      <div className={`backdrop-blur-sm md:hidden absolute bg-blur-sm bg-opacity-50 bg-black h-screen w-full top-14 ${claseNav[2]} transition-all duration-700 ease-in-out`}>
        <ul className="font-bold text-2xl flex flex-col gap-y-3 pl-8">
            <li className="">My Apps</li>
            <li className="">Skills & Tools</li>
            <li className="">Xperience</li>
            <li className="">Contact</li>
        </ul>
      </div>
    </nav>

  )
}
