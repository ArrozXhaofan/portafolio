"use client"

import { AiFillApple } from "react-icons/ai";
import {useState} from 'react'

export default function Nav() {

    const [claseNav, setClaseNav] = useState(['rotate-90 translate-y-2','rotate-90'])
    const [logicNav, setLogicNav] = useState(true)

    function changeNav(){

        if (logicNav) {
            setClaseNav(['rotate-90 absolute','rotate-90 translate-y-2'])
            setLogicNav(!logicNav)
        }
        else{

            setClaseNav(['rotate-45 absolute','-rotate-45'])
            setLogicNav(true)
        }
    }

  return (
    <nav className="select-none w-full flex justify-center bg-black text-[#B1B1B1]">

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

      

    </nav>
  );
}
