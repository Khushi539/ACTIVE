import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkdin from '../assets/linkdin.png';
import Rectangle from '../assets/Rectangle.png';
const Footer = () => {
    return (
         <footer>
        <div style={{ backgroundImage: `url(${Rectangle})` }} className='h-[200px] w-full'>
           <div data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out"
               className='flex text-white lg:justify-evenly lg:items-center pt-[50px] m-4 gap-10'>
              <div>
               <p>Location</p>
               <p>3481 Melrose Place</p>
               <p>Beverly Hills, CA 90210</p>
             </div>

             <div>
               <p>Share with Love</p>
                <div className='flex gap-2'>
                   <img src={facebook} alt=''/>
                   <img src={twitter} alt=''/>
                   <img src={linkdin} alt=''/>
                </div>
             </div>

             <div className=''>
               <p>About ActiveBox <br/>
               ur team creates clean, functional,<br/>and user-friendly web applications<br/>to solve everyday problems.</p>
             </div>
           </div>
        </div>

        <div  className='text-center h-[100px] w-full'>
          <p className='text-[13px] m-5'>copyright © 2015 ActiveBox. All Rights Reserved</p>
          <p className='lg:text-[18px]'>Made with Khushi pawar</p>
        </div>
      </footer>
    )
}
export default Footer;