
import './App.css';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

import Rectangle from './assets/Rectangle.png'; 
import Header from './components/Header';
import Main from './components/Main'; 
import Works from './components/Works';
import Featurs from './components/Featurs';
import Team from './components/Team';
import Brand from './components/Brand';
import Download from './components/Download';
import Footer from './components/Footer';



function App() {
   useEffect(() => {
    AOS.init();
   },[])


  return (
    <div className='parent'>
  
      <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Rectangle})` }}
     >
      <div>
            <Header />
         <div className='border border-gray-500 width-[100px] mb-[149px]'></div>
 
             <Main />
      </div>
      </div>

       <Featurs/>
        
        
         <Works/>

          <Team/>
         
          <Brand/>

          <Download/> 
      

          <Footer/>
 </div> 
    
    
  
    
 );
}

export default App;
