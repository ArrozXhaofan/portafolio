import { Subnav } from "@/components"

export default function page() {

  const datos = {
    title: 'Jeanpiere Laura',
    link1:{
      name:'Overview',
      path:'/'
    },
    link2: {
      name:'Github',
      path:'/'
  },
  link3: {
      name:'Linkdln',
      path:'/'
  },
  enlace: {
      name:'Download CV',
      path:'/'
  }
  }


  return (
    <>

      <Subnav data={datos} />

      
      <div className='h-screen bg-red-500'>
        fsd
      </div>
      <div className='h-screen bg-green-500'>
        fsd
      </div>
      <div className='h-screen bg-purple-500'>
        fsd
      </div>

    </>
  )
}
