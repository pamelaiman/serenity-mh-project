import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from '../img/serenity.png';
import {Link} from 'react-router-dom';


//imported bootstrap navigation bar, still figuring out how to make links work
function HomeBar() {
  return (
    <section>
        <Navbar className="navsection">
          <img id="logo" src={logo} alt="Logo"/>
          <Nav className="navsection">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to='/about'>ABOUT</Link>
            <Link className="link" to='/library'>LIBRARY</Link>
          </Nav>
        </Navbar>
    </section>
      
   
  
  );
}



export default HomeBar;