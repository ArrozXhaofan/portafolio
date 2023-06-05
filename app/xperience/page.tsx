import { Subnav } from '@/components'
import React from 'react'

export default function Experience() {

  const datos = {
    title: 'Jeanpiere Laura',
    link1:{
      name:'Overview',
      path:'/'
    },
    link2: {
      name:'Cera Sweather',
      path:'/'
  },
  link3: {
      name:'Cera Sweather',
      path:'/'
  },
  enlace: {
      name:'App Store',
      path:'/'
  }
  }

  return (
    <>
      <Subnav data={datos} />
    
    </>
  )
}
