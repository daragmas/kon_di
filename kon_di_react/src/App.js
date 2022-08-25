import NavBar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Entry from './components/Entry'
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState((document.cookie=='hash=' || document.cookie =='') ? false : true)

  const handleLoginChange = (bool) => {
    // console.log("bool", bool)
    setLoggedIn(bool)
  }

  return (
    <div className="App">
      <Router>
        <NavBar onLoginChange={handleLoginChange} loginState={loggedIn} />
        <Routes>
          <Route exact key={1} path='/' element={<Home />} />
          <Route exact key={2} path='/login' element={<Login onLoginChange={handleLoginChange} />} />
          <Route exact key={3} path='/register' element={<Register />} />
          <Route exact key={4} path='/signup' element={<Register />} />
          <Route exact key={5} path='/profile' element={<Profile loginState={loggedIn}/>} />
          <Route key={6} path='/entry' element={<Entry />}>
            <Route exact key={7} path=':entryid' />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
