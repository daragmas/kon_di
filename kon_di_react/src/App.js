import NavBar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
    </div>
  );
}

export default App;
