import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.jpg'


const Navbar = () => {
  return (
    <div className="md:flex flex-row flex-end items-center p-5">
        <Link to="/">
            <img src={Logo} alt="logo" className="w-20 h-20 my-0 mx-20"/>
        </Link>
        <div className="text-2xl flex gap-10">
            <Link>Home</Link>
            <a href="#exercises">Exercises</a>
        </div>
    </div>
  )
}

export default Navbar;