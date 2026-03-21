import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? 'active' : ''}>Case Studies</NavLink></li>
        <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''}>Testimonials</NavLink></li>
        <li><NavLink to="/recent-work" className={({ isActive }) => isActive ? 'active' : ''}>Recent Work</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Get In Touch</NavLink></li>
      </ul>

      <div className="nav-socials">
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaBehance /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </nav>
  )
}

export default Navbar
