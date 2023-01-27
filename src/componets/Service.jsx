import React from 'react'
import dev from '../image/skill/dev.svg'
import design from '../image/skill/design.svg'
import support from '../image/skill/support.svg'
import ux from '../image/skill/ux.svg'

function Service() {
  return (
    <div data-aos="fade-up">

<div className=' bg-color flex-wrap  h-[40rem] ' >
    <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex  justify-center text-white mt-10 pt-10 subpixel-antialiased font-black md:font-bold text-[20px] md:text-3xl font-Raleway'>Hi, I’m Omprakash. Nice to meet you.</h1>

    <div className='w-auto flex justify-center'>

    <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex font-Ibm justify-center text-center   text-[12px] subpixel-antialiased   md:text-lg font-medium pt-5 w-[68rem] text-white'>
    Since beginning my journey as a freelance designer over 2 years ago, I've done remote work for agencies,Fiverr,Upwork consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
    </p>
    </div>

    {/* ------------------------ skills section  --------------------------- */}

    <div className='flex  shrink justify-center pt-20'>
 {/* -------------edit------------  */}
    <div className='rounded-lg shrink flex md:flex-row  flex-col justify-center w-[22rem]  md:w-[98rem] drop-shadow-2xl h-[107rem] md:h-[35rem] space-x-8 bg-white grid-flow-row pt-10 '>
           
           {/* First-section  */}

          <div data-aos="fade-up" className=' flex flex-col grow-0 text-center mt-[-9rem] md:mt-0   w-[22rem]  md:border-r-2 pr-4'>
            <div className='flex justify-center'>

            <img src={dev} className=" w-[5rem] h-[3.25rem] md:w-[57px]  md:h-[57px] " alt="" />
            </div>
            <div className='flex justify-center head-color'>
            <h1 className='pt-5 font-Raleway  font-bold text-xl md:text-2xl w-[13rem] border-b-2  '>Development</h1>

            </div>
            <p className='font-Ibm  font-normal text-base md:text-lg head-color pt-4'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>

            <p className='font-Ibm violet md:text-lg text-base pt-8 '>Languages I speak:</p>
            <div className='pt-4 font-Ibm  head-color md:text-lg text-sm'>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JAVA SCRIPT</p>
            <p>REACT JST</p>
            <p>TAILWIND CSS</p>
            <p>SASS</p>
            <p>NODE JS</p>
            <p>EXPRESS JS</p>
            <p>MONGO DB</p>
            </div>

            <hr  className='w-[22rem] relative right-0 mt-4  md:hidden ' />
        </div>

{/* Second-section  */}
          <div data-aos="fade-up" className=' flex flex-col text-center w-[18rem] mt-8 md:mt-0  md:w-[22rem]  md:border-r-2'>
          <div className='flex justify-center'>

            <img src={design} className=" w-[5rem] h-[3.25rem] md:w-[57px]  md:h-[57px] " alt="" />
            </div>
            <div className='flex justify-center head-color'>
            <h1 className='pt-5 font-Raleway font-bold text-xl md:text-2xl w-[13rem] border-b-2  '>Design</h1>

            </div>
            <p className='font-Ibm  font-normal text-base md:text-lg head-color pt-4'>
            I value simple content structure, clean design patterns, and thoughtful .
            </p>

            <p className='font-Ibm violet md:text-lg text-base pt-8'>Things I enjoy designing:</p>
            <div className='pt-4 font-Ibm  head-color md:text-lg text-sm'>
            <p>Affinity Designer</p>
            <p>Figma</p>
            <p>Font Awesome</p>
            <p>Pen & Paper</p>
            <p>Sketch</p>
            <p>Webflow</p>
            
            </div>
            
          </div>
        <hr  className='w-[22rem] relative right-8 mt-4  md:hidden ' />
        {/* Third sections  */}
          <div data-aos="fade-up" className=' flex flex-col text-center  w-[18rem] mt-8 md:mt-0  md:w-[22rem]  md:border-r-2 pr-4'>
          <div className='flex justify-center'>

            <img src={ux} className=" w-[5rem] h-[3.25rem] md:w-[57px]  md:h-[57px] " alt="" />
            </div>
            <div className='flex justify-center head-color'>
            <h1 className='pt-5 font-Raleway font-bold text-xl md:text-2xl w-[13rem] border-b-2  '>UX Research</h1>

            </div>
            <p className='font-Ibm  font-normal  text-base md:text-lg head-color pt-4'>
            I  help companies to design intuitive digital products and online experiences.
            </p>

            <p className='font-Ibm violet md:text-lg text-base  pt-8'>Things I Research:</p>
            <div className='pt-4 font-Ibm  head-color md:text-lg text-sm'>
            <p>UI</p>
            <p>UX</p>
            <p>WEB</p>
            <p>LOGO</p>
            </div>
          </div>
          <hr  className='w-[22rem] relative right-8 mt-4  md:hidden ' />
          <div data-aos="fade-up" className=' flex flex-col text-center  w-[18rem] mt-8 md:mt-0  md:w-[22rem]'>
          <div className='flex justify-center'>

            <img src={support} className=" w-[5rem] h-[3.25rem] md:w-[57px]  md:h-[57px] " alt="" />
            </div>
            <div className='flex justify-center head-color'>
            <h1 className='pt-5 font-Raleway font-bold text-xl md:text-2xl w-[13rem] border-b-2  '>Support</h1>

            </div>
            <p className='font-Ibm  font-normal  text-base md:text-lg head-color pt-4'>
            we are support 24*7 and any time to help you and any query.
            </p>

            <p className='font-Ibm violet md:text-lg text-base pt-8'>Support:</p>
            <div className='pt-4 font-Ibm  head-color md:text-lg text-sm'>
            <p>E-mail</p>
            <p>Social Media</p>
            <p>Live Chat</p>
            <p>Fiverr</p>
            </div>
          </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Service
