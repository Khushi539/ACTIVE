import Layer from '../assets/Layer.png';
import Layerb from '../assets/Layerb.png';
import Layerc from '../assets/Layerc.png';
import Layerd from '../assets/Layerd.png';
import Layere from '../assets/Layere.png';
import Layerf from '../assets/Layerf.png';


const Featurs = () => {
    return (
        <featurs>
         <div className='grid grid-flow-col grid-rows-3 lg:grid-rows-2 center justify-center m-3 gap-10 mb-[120px] mt-[120px] bg[#ffffff'>
            <div className=''>
              <img data-aos="zoom-in" data-aos-duration="3000" data-aos-easing="ease-in-out"
                className='mx-auto mb-[30px]' src={Layer} alt="Layer icon"/>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out"
                  className='text-center text-[14px] font-bold mb-[25px]'>
                    Easily Customised
                    </p>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out"
                className='text-[14px] text-center'>
                  We believe that one size doesn't <br/> 
                  fit all. Our platform is easily <br/> 
                  customized, giving you them flexibility<br/> 
                  to adapt it to your unique requirements.
              </p>
            </div>
            <div className=''>
              <img data-aos="zoom-in" data-aos-duration="3000" data-aos-easing="ease-in-out"
                className='mx-auto mb-[30px]' src={Layerb} alt="Layer icon"/>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                className='text-center text-[14px] font-bold mb-[25px]'>
                  Clean Code
              </p>
              <p className='text-[14px] text-center'
               data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out">
                Behind our intuitive design<br/>
                is a foundation of Clean Code.<br/>
                Our expertly written code is<br/>
                well-structured, easy to maintain,<br/>
                and highly efficient, ensuring<br/>
                reliable performance and<br/>
                future scalability.
              </p>
            </div>
            <div className=''>
              <img data-aos="zoom-in" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                className='mx-auto mb-[30px]' src={Layerc} alt="Layer icon"/>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out"
                  className='text-center text-[14px] font-bold mb-[25px]'>
                    Responsive Ready
               </p>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                 className='text-[14px] text-center'>
                  Our platform is built to perform <br/>
                  flawlessly on any device. Responsive<br/> 
                  Ready means your experience will be<br/>
                  seamless, whether you're on a desktop,<br/>
                  tablet, or smartphone.
               </p>
            </div>
            <div className=''>
              <img data-aos="zoom-in" data-aos-duration="3000" data-aos-easing="ease-in-out"
                className='mx-auto mb-[30px]' src={Layerd} alt="Layer icon"/>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                 className='text-center text-[14px] font-bold mb-[25px]'>
                  Ready to Ship
               </p>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                 className='text-[14px] text-center'>
                  Our product is complete,<br/>
                  tested, and ready for<br/>
                  use. Ready to Ship means you<br/>
                  can deploy it instantly and<br/>
                  start seeing results without<br/>
                  any extra development work.
                </p>
            </div>
            <div className=''>
              <img data-aos="zoom-in" data-aos-duration="3000" data-aos-easing="ease-in-out"
                 className='mx-auto mb-[30px]' src={Layere} alt="Layer icon"/>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                 className='text-center text-[14px] font-bold mb-[25px]'>
                  Ready to Ship
               </p>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                className='text-[14px] text-center'>
                  Our product is complete, tested,<br/>
                  and ready for use. Ready to<br/>
                  Ship means you can deploy it<br/>
                  instantly and start seeing results<br/>
                  without any extra development work
              </p>
            </div>
            <div className=''>
              <img data-aos="zoom-in" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                className='mx-auto mb-[30px]' src={Layerf} alt="Layer icon"/>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                className='text-center text-[14px] font-bold mb-[25px]'>
                  Download for Free
              </p>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" 
                className='text-[14px] text-center'>
                  Get instant access to our powerful<br/> 
                  features at no cost. Download for<br/> 
                  Free and start exploring our product<br/
                  >without any financial commitment.
              </p>
            </div>
         </div>
       </featurs>
    )
}

export default Featurs;