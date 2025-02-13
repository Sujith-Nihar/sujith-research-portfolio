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
     data-aos-anchor-placement="bottom-bottom" className='flex  justify-center text-white mt-10 pt-10 subpixel-antialiased font-black md:font-bold text-[20px] md:text-3xl font-Raleway'>Hi, I’m Sujith. Nice to meet you.</h1>

    <div className='w-auto flex justify-center'>

    <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex font-Ibm justify-center text-center   text-[12px] subpixel-antialiased   md:text-lg font-medium pt-5 w-[68rem] text-white'>
    I am a Machine Learning Research Student with a year of experience, having published two research papers on the integration of machine learning and computer vision. I have spent 2 years at Accenture as a Machine Learning Engineer & Full Stack Developer, where I developed TinyML models for resource-constrained devices, while also designing scalable backend systems and building intuitive frontend interfaces. Currently, I am researching image analysis to detect depression from Instagram posts, using AI to address mental health challenges. My work blends cutting-edge technology with human-centered solutions, and I’m passionate about creating intelligent, impactful tools that make a difference.
    </p>
    </div>

    {/* ------------------------ skills section  --------------------------- */}

    <div className='flex  shrink justify-center pt-20'>
 {/* -------------edit------------  */}
    <div className='rounded-lg shrink flex md:flex-row  flex-col justify-center w-[22rem] lg:w-[72rem]  2xl:w-[98rem] drop-shadow-2xl h-[107rem] sm:w-[58rem] md:h-[37rem] 2xl:h-[35rem] space-x-8 bg-white grid-flow-row pt-10 '>
           
           {/* First-section  */}

          <div data-aos="fade-up" className=' flex flex-col grow-0 text-center mt-[-9rem] md:mt-0   w-[22rem]  md:border-r-2 pr-4' >
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
            <p>PYTHON</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JAVA SCRIPT</p>
            <p>REACT JS</p>
            <p>FastAPI</p>
            <p>SQL</p>
            
            </div>

            <hr  className='w-[22rem] relative right-0 mt-4  md:hidden ' />
        </div>

{/* Second-section  */}
          <div data-aos="fade-up" className=' flex flex-col text-center w-[18rem] mt-8 md:mt-0  md:w-[22rem]  md:border-r-2'>
          <div className='flex justify-center'>

            <img src={design} className=" w-[5rem] h-[3.25rem] md:w-[57px]  md:h-[57px] " alt="" />
            </div>
            <div className='flex justify-center head-color'>
            <h1 className='pt-5 font-Raleway font-bold text-xl md:text-2xl w-[13rem] border-b-2  '>Technology</h1>

            </div>
            <p className='font-Ibm  font-normal text-base md:text-lg head-color pt-4'>
            I believe in data, scalability, and seamless solutions. From building intelligent systems to crafting cloud infrastructures and developing full-stack applications, I create tech that empowers.
            </p>

            <p className='font-Ibm violet md:text-lg text-base pt-8'>Things I enjoy :</p>
            <div className='pt-4 font-Ibm  head-color md:text-lg text-sm'>
              <p>Machine learning</p>
              <p>Deep learning</p>
            <p>NLP and Computer vision</p>
            <p>Cloud technology</p>
            <p>Full stack dev</p>
            </div>
            
          </div>
        <hr  className='w-[22rem] relative right-8 mt-4  md:hidden ' />
        {/* Third sections  */}
          <div data-aos="fade-up" className=' flex flex-col text-center  w-[18rem] mt-8 md:mt-0  md:w-[22rem]  md:border-r-2 pr-4'>
          <div className='flex justify-center'>

            <img src={ux} className=" w-[5rem] h-[3.25rem] md:w-[57px]  md:h-[57px] " alt="" />
            </div>
            <div className='flex justify-center head-color'>
            <h1 className='pt-5 font-Raleway font-bold text-xl md:text-2xl w-[13rem] border-b-2  '>Research</h1>

            </div>
            <p className='font-Ibm  font-normal  text-base md:text-lg head-color pt-4'>
            For me, research is more than just experimenting with models—it's about uncovering patterns, advancing intelligence, and pushing the boundaries of what's possible
            </p>

            <p className='font-Ibm violet md:text-lg text-base  pt-8'>Things I Use:</p>
            <div className='pt-4 font-Ibm  head-color md:text-lg text-sm'>
              <p>Machine learning</p>
              <p>Deep learning</p>
              <p>Generative AI</p>
              <p>Computer vision</p>
              <p>Natural Language processing</p>
              <p>TinyML</p>
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
            <p>LinkedIn</p>
            <p>Instagram</p>
            </div>
          </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Service
