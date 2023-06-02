import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Library from './Components/Library';
import TrackedBook from './Components/TrackedBook';
import AccountPage from './Components/Account';
import AboutUs from './Components/About';

//creating different pages using routes
function App() {

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/book1" element={<TrackedBook/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/about" element={<AboutUs/>}/>
          </Routes>
    </Router>
  );
}

export default App;