import ActiveBox from '../assets/ActiveBox.png';

const Header =() => {
    return(
         <header className="flex flex-col sm:flex-row items-center justify-between p-4 center justify-evenly sm:p-10"
          data-aos="fade-down" data-aos-duration="2000">
          <div>
            <img src={ActiveBox} className="" alt="logo" />
          </div>
          <div>
            <nav>
              <ul>
                 <li className="flex text-white gap-10" >
                  <a href="Features#">Features</a>
                  <a href="Works#">Works</a>
                  <a href="Our Team#">Our Team</a>
                  <a href="Testimonials#">Testimonials</a>
                  <a href="Download#">Download</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    )
}
export default Header;