import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import cinema from './Icon/cinema.png';
import Accont from "./Icon/Accont.png";
import movies from "./Icon/movies.png";
import ticket from './Icon/ticket.png';


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="titleNavbar">
        Cinema
       <img src={cinema} alt="" style={{width:"50px"}}></img>
      </Link>
      <ul>
        <CustomLink to="/Movies">Movies
        <img src={movies} alt="" style={{width:"50px"}}></img>
        </CustomLink>
        <CustomLink to="/Ticket">Get a ticket
        <img src={ticket} alt="" style={{width:"50px"}}></img>
        </CustomLink>
        <CustomLink to="/Login">
        <img src={Accont} alt="" style={{width:"40px"}}></img>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
