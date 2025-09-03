 const Main = () => {
    return (
        <main>
            <div className='text-center '>
               <h1 className='text-white mb-10 lg:text-6xl text-5xl mb-[43px]'
                  data-aos="fade" data-aos-duration="3000" data-aos-easing="ease-in-out">
                    The Essential Connection <br/>
                    Powering Your World
                </h1>
               <p data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out"
                   className='text-white lg:text-xl text-lg mb-[20px] lg:mb-[80px]'>
                    We are a collective of creators and problem-solvers. From the developers who code 
                  <br/> our future to the data analysts who guide our decisions, our team is the driving force of our brand.
                </p>
               <button  data-aos-easing="ease out" data-aos="zoom-in" data-aos-duration="600ms"
                    className='bg-[#e74545] hover:bg-red-400 text-white text-[13px] px-[47px] py-2 m-2'>Find Out More</button>
             </div>
        </main>
    )
 }
 export default Main;