import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1><img src="https://1.bp.blogspot.com/-Vgshwdrlo4I/VPjKweHgEGI/AAAAAAAAAJ8/SvhARjdO0FU/s1600/Anime-logo-square.png" alt="Logo" />
                </h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/2">YuyutsuKaisen</NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/3">Naruto</NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/4">OnePiece</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar