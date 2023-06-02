import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from '../img/serenity.png';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';


//import nav bar from bootstrap for top pick page
function TrackedNavBar() {
  const [wantsLogOut, setLogOut] = useState(false); 
  const history = useNavigate();

  const handleLogOut= () => {
    setLogOut(true);
  };

  useEffect(() => {
    if(wantsLogOut) {
      history('/');

      alert("You have successfully logged out");
    }
  }, [wantsLogOut, history]);
  return (
    <>
      
      <Navbar className="navsection">
        <img id="logo" src={logo} alt="Logo"/>
        <Nav className="navsection">
          <Link className='link' to='/'>HOME</Link>
          <Link className='link' to="/About">ABOUT</Link>
          <Link className='link' to='/library'>LIBRARY</Link>
          <Link className='link' id='accountLink' to='/Account'>MY ACCOUNT</Link>
          <Link className='link' id="logOut" onClick={handleLogOut}>LOG OUT</Link>
        </Nav>
      </Navbar>

      
    </>
  );
}



export default TrackedNavBar;