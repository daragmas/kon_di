import NavBar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Entry from './components/Entry'
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route exact key={1} path='/' element={<Home/>}/>
        <Route exact key={2} path='/login' element={<Login/>}/>
        <Route exact key={3} path='/register' element={<Register/>}/>
        <Route exact key={4} path='/signup' element={<Register/>}/>
        <Route exact key={5} path='/profile' element={<Profile/>}/>
        <Route exact key={6} path='/entry' element={<Entry/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
