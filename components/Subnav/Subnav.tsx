"use client"
import React, { useEffect,useState } from 'react'
import {BsChevronCompactDown} from 'react-icons/bs'

export default function Subnav() {

    const [scrolled, setScrolled] = useState(false);
    const [subNav, setSubNav] = useState("")

    const [classChevron, setClassChevron] = useState(["","-translate-y-24 opacity-0"])
    const [logicChecron, setLogicChevron] = useState(true)

    function moverChevron(){

    if (logicChecron) {
      setClassChevron(['rotate-180','-translate-y-24 opacity-0'])     
      setLogicChevron(!logicChecron)
  }
  else{   
    setClassChevron(['','translate-y-10 opacity-100'])
      setLogicChevron(!logicChecron)
  }
}

    useEffect(() => {

      setClassChevron(['rotate-180','-translate-y-24 opacity-0'])  
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
          if (scrollTop > 56 && !scrolled) {
            setSubNav("fixed top-0")
            setScrolled(true);    
          } else if (scrollTop <= 56 && scrolled) {
            setSubNav("")
            setScrolled(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrolled]);

  return (

    <div className={`bg-opacity-75 backdrop-blur bg-black w-full flex justify-center select-none ${subNav} `}>

        <div className="max-w-7xl flex px-5 md:p-0 justify-between md:justify-around w-full h-10 items-center text-white">

            <div>
              <h2 className='font-bold text-lg'>
                Jeanpiere Laura
              </h2>


            </div>
           
            <ul className="hidden md:flex gap-x-7 text-sm">
              <li className="duration-500 ease-in-out hover:text-[#B1B1B1]">Overview</li>
              <li className="duration-500 ease-in-out hover:text-[#B1B1B1]">Github</li>
              <li className="duration-500 ease-in-out hover:text-[#B1B1B1]">LinkedIn</li>
              <li>
                <button className='rounded-full text-[0.7rem] bg-blue-500 hover:bg-blue-400 px-3 py-0'>
                  Download CV
                </button>
              </li>
            </ul>

            <div className='md:hidden flex gap-x-4 text-sm'>

              
              <BsChevronCompactDown onClick={()=>moverChevron()} className={`${classChevron[0]} duration-500 ease-out text-2xl`} />

              <button className='rounded-full text-[0.7rem] bg-blue-500 hover:bg-blue-400 px-3 py-0'>
                  Download CV
              </button>

            </div>

        </div>

        <div className={`z-30 bg-opacity-75 backdrop-blur bg-black md:hidden h-24 absolute w-full ${classChevron[1]} transition-all duration-1000 ease-in-out
          flex justify-center items-center font-bold text-xl`}>
            <ul>
              <li className="list-none text-[#B1B1B1]">Overview</li>
              <li className="list-none text-[#B1B1B1]">Github</li>
              <li className="list-none text-[#B1B1B1]">LinkedIn</li>
            </ul>
              
        </div>

    </div>

  
  )
}
