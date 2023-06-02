import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from '../img/serenity.png';
import { Link } from 'react-router-dom';


//import nav bar from bootstrap for top pick page
function LibraryBar() {
  return (
    <>
      
      <Navbar className="navsection">
        <img id="logo" src={logo} alt="Logo"/>
        <Nav className="navsection">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/About">ABOUT</Link>
            <Link className="link" to="/Library">LIBRARY</Link>
            <Link className="link" to="/Account">MY ACCOUNT</Link>
        </Nav>
      </Navbar>

      
    </>
  );
}



export default LibraryBar;