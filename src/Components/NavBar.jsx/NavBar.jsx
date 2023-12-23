
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <Link to="/">

        <h1>
          <img src="https://1.bp.blogspot.com/-Vgshwdrlo4I/VPjKweHgEGI/AAAAAAAAAJ8/SvhARjdO0FU/s1600/Anime-logo-square.png" alt="Logo" />
        </h1>
        
      </Link>  
        <nav>
          <ul>
            <li>
            <NavLink to={`/category/yuyutsu`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>Yuyutsu Kaisen</NavLink>
          </li>
          
          <li>
            <NavLink to={`/category/naruto`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>Naruto Shippuden</NavLink>
          </li>
          <li>
          
            <NavLink to={`/category/one`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>One Piece</NavLink>
          </li>
          </ul>  
        </nav>
        <CartWidget/>
      
    </header>
  )
}

export default NavBar