import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>

<footer className="footer footer-center p-10 bg-[#132320]  rounded text-[#f2f2f2]">
  <nav className="grid grid-flow-col gap-4">
    <Link to='/' className="link link-hover">Home</Link> 
    <Link to='/contact' className="link link-hover">Contact</Link> 
    <Link to='/event' className="link link-hover">Events</Link> 
    <Link to='/blog' className="link link-hover">Blog</Link>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <img className=" w-32 md:w-40" src="https://colmooc.eu/wp-content/uploads/2019/12/Letstudy_Logo_Light_Horizontal@2x.png" alt="" />
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>


        </div>
    );
};

export default Footer;