
import {motion} from 'framer-motion';
import {styles} from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto xs:py-16 py-6  my:0  min-h-fit ">
     <section
      id="profile"
      className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-20 lg:h-[83vh] h-auto lg:mb-24 mb-0 pt-[4vh] lg:mx-[10rem] mx-[5%] min-h-fit"
    >
      {/* Profile Picture Container */}
      <div className="flex lg:h-[400px] lg:w-[400px] md:h-[275px] md:w-[275px] w-auto h-[46vw] justify-center my-auto">
        <img
          src="/dhevprofil.png"
          alt="Dhev profile picture"
          className="object-cover"
        />
      </div>

      {/* Profile Text */}
      <div className="self-center text-center">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="lg:text-6xl text-4xl font-bold text-[#F8AC3A]">Dhev </h1>
        <p className="lg:text-2xl text-lg mb-4 font-semibold">Software Developer</p>

        {/* Buttons Container */}
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          <button
            className="font-semibold transition-all ease-in-out duration-300 px-6 py-3 w-[8rem] rounded-full border border-gray-700 hover:bg-white hover:text-black"
            onClick={() => window.open('src/assets/DhevResume.pdf', '_blank')}
          >
            Download CV
          </button>
          <a href="#contact">
          <button
            className="font-semibold transition-all ease-in-out duration-300 px-6 py-3 w-[8rem] rounded-full border border-gray-700 bg-gray-800 text-white hover:bg-black"
            onClick={() => (window.location.href = './#contact')}
          >
            Contact Info
          </button>
          </a>
        </div>

        {/* Socials Container */}
        <div className="flex justify-center mt-4 gap-4">
          <img
            src="/linkedin.png"
            alt="LinkedIn profile"
            className="cursor-pointer h-8"
            onClick={() => (window.location.href = 'https://linkedin.com/in/dhev-selvam-14aa4523a/')}
          />
          <img
            src="/github.png"
            alt="Github profile"
            className="cursor-pointer h-8"
            onClick={() => (window.location.href = 'https://github.com/Dhev1')}
          />
          <img
            src="/instagram.png"
            alt="Instagram profile"
            className="cursor-pointer h-8"
            onClick={() => (window.location.href = 'https://www.instagram.com/d_h_ev/')}
          />
        </div>
      </div>
    </section>
      
       <div className='absolute xs:bottom-10 bottom-32   w-full flex justify-center items-center gap-3 '>
       <div className="flex flex-col items-center">
    <p className="text-center">Wanna know about me?</p>
    <div className="flex flex-row items-center gap-2">
    <p className="text-center">Scroll down </p> 
    <img
            src="/smile.png"
            alt="Instagram profile"
            className="cursor-pointer h-8"/>
            </div>
  </div>
  
 
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 cursor-pointer border-secondary flex justify-center items-start p-2 ">
            <motion.dev
            animate={{
              y:[0,24,0],
            
            }}
transition={{
  duration:1.5,
  repeat:Infinity,
  repeatType:'loop'
}}
className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
          
        </a>
       </div>
        
        </section>
  )
}

export default Hero