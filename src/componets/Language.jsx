import React from 'react'
import html from '../image/language/html.png'
import css from '../image/language/css.png'
import js from '../image/language/js.png'
import react from '../image/language/react.png'
import node from '../image/language/node.png'
import sass from '../image/language/sass.png'
import mongo from '../image/language/mongo.png'
import tailwind from '../image/language/tailwind.png'
import Webflow from '../image/language/Webflow.png'
import figma from '../image/language/figma.png'
export const Language = () => {
  return (
    <div className='md:mt-[18rem] mt-[87rem] h-auto flex shrink justify-center '>
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className=' md:flex flex-wrap  md:flex-row grid grid-cols-2 items-center pl-16 md:pl-0 md:space-x-2 md:justify-center'>
            <img src={html}  className="md:w-[108px] md:h-[124px] w-[79px] h-[79px] md:-rotate-12" alt="" />
            <img src={css}  className="md:w-[108px] md:h-[124px] w-[79px] h-[79px] md:rotate-12" alt="" />
            <img src={react}  className="md:w-[124px] md:h-[124px] w-[80px] h-[80px] md:rotate-45" alt="" />
            <img src={js}  className="md:w-[108px] md:h-[124px] w-[81px] h-[81px] mt-4 md:mt-[8rem]" alt="" />
            <img src={node} className="md:w-[192px] md:h-[179px] w-[119px] h-[122px] md:rotate-3" alt="" />
            <img src={Webflow} className="md:w-[298px] md:h-[213px] w-[152px] h-[144px] mt-0 md:mt-[5rem] md:-rotate-12" alt="" />
            <img src={figma}  className="md:w-[156px] md:h-[141px] w-[100px] h-[100px] md:rotate-12" alt="" />
            <img src={sass}  className="md:w-[138px] md:h-[109px] w-[80px] h-[80px] mt-0 md:mt-[10rem] -rotate-12" alt="" />
            <img src={mongo} className="md:w-[212px] md:h-[217px] w-[111px] h-[142px]" alt="" />
            <img src={tailwind}  className="md:w-[154px] md:h-[154px] w-[81px] h-[81px] mt-0 md:mt-[10rem] -rotate-12" alt="" />
            
        </div>
    </div>
  )
}
