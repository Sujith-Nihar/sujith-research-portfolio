import React from 'react'
import { Downpart } from './Downpart'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Image_Slider } from './Image_Slider'
import { Language } from './Language'
import Service from './Service'
import { Work } from './Work'


export const Home = () => {
  return (
   <>
   <Hero />
  <Service />
  <Language/>
 {/* <Image_Slider /> */}
 <Work />
 <Downpart />
 <Footer />
   </>
  )
}
