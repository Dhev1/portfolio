import { BrowserRouter }from "react-router-dom";
import{About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'


const App=() =>{
  
  return (
  
     <BrowserRouter>
     <div className="relative z-0  bg-primary">
      <div >
        <Navbar />
        <Hero />
      </div>
    
      
      <About />
      <Experience />
      <Tech />
      <Works />
      <StarsCanvas />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
     </div>
     </BrowserRouter>
  )
}

export default App
