import NavBar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
