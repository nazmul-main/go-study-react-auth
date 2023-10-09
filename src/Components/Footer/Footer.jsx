import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
  return (
    <div>

      <footer className="footer footer-center p-10 bg-[#132320]  rounded text-[#f2f2f2]">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <img className=" w-32 md:w-40" src="https://colmooc.eu/wp-content/uploads/2019/12/Letstudy_Logo_Light_Horizontal@2x.png" alt="" />
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <Link to='/' className="link link-hover">Home</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
          <Link to='/event' className="link link-hover">Events</Link>
          <Link to='/blog' className="link link-hover">Blog</Link>
        </nav>
        <div className="grid grid-flow-col gap-4">
          <Link to='https://www.facebook.com/nazmulhossen539' target="_blanck" className="text-xl md:text-2xl text-[#03d5b4]"><BsFacebook /></Link>
          <Link to='https://www.instagram.com/nazmulhossen01/' target="_blanck" className="text-xl md:text-2xl text-[#03d5b4]"><BsInstagram /></Link>
          <Link to='https://github.com/nazmulhossen1' target="_blanck" className="text-xl md:text-2xl text-[#03d5b4]"><BsGithub /></Link>
          <Link to='https://www.linkedin.com/in/nazmul-hossen-1587b021a/' target="_blanck" className="text-xl md:text-2xl text-[#03d5b4]"><BsLinkedin /></Link>

        </div>

        <aside>
          <p>Copyright © 2023 - All right reserved by MD Nazmul Hossen</p>
        </aside>
      </footer>


    </div>
  );
};

export default Footer;