"use client"

import { AiFillApple } from "react-icons/ai";
import {useState,useEffect} from 'react'
import Link from "next/link";

export default function Nav() {

    const [claseNav, setClaseNav] = useState(['rotate-90 translate-y-2','rotate-90','-translate-y-[1050px]'])
    const [logicNav, setLogicNav] = useState(true)

    function changeNav(){

        if (logicNav) {
            setClaseNav(['rotate-90 absolute','rotate-90 translate-y-2','-translate-y-[1050px]'])     
            setLogicNav(!logicNav)
        }
        else{   
            setClaseNav(['rotate-45 absolute','-rotate-45',''])
            setLogicNav(!logicNav)
        }
    }

    function upNav(){
      setClaseNav(['rotate-90 absolute','rotate-90 translate-y-2','-translate-y-[1050px]']) 
    }

    useEffect(() => {
    setClaseNav(['rotate-90 absolute','rotate-90 translate-y-2','-translate-y-[1050px]'])
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
            <Link href={'/'} className="hover:text-white duration-500 ease-in-out">My Apps</Link>
            <Link href={'/'} className="hover:text-white duration-500 ease-in-out">Skills & Tools</Link>
            <Link href={'/xperience'}  className="hover:text-white duration-500 ease-in-out">Xperience</Link>
            <Link href={'/'}  className="hover:text-white duration-500 ease-in-out">Contact</Link>
        </ul>

        <button className="text-2xl md:hidden relative text-[#B1B1B1] flex flex-col gap-0  z-50" onClick={()=>{changeNav()}}>
            <div className={`border-[0.5px] rounded-full border-[#B1B1B1] h-5 ${claseNav[0]} transition-all duration-500 ease-in-out`}></div>
            <div className={`border-[0.5px] rounded-full border-[#B1B1B1] h-5 ${claseNav[1]} transition-all duration-500 ease-in-out`}></div>
        </button>        
      </div>

      <div className={`z-40 backdrop-blur-2xl md:hidden fixed bg-blur-sm bg-opacity-75 bg-black h-screen w-full top-14 ${claseNav[2]} transition-all duration-700 ease-in-out`}>
        <ul className="font-bold text-2xl absolute flex-col gap-y-3 pl-8">
            <li><Link href={''} onClick={()=>{upNav()}} className="">My Apps</Link></li>
            <li><Link href={''} onClick={()=>{upNav()}} className="">Skills & Tools</Link></li>
            <li><Link href={'/xperience'} onClick={()=>{upNav()}} className="">Xperience</Link></li>
            <li><Link href={''} onClick={()=>{upNav()}} className="">Contact</Link></li>
        </ul>
      </div>
    </nav>

  )
}
