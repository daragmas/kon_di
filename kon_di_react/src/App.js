import NavBar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Entry from './components/Entry';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Entry/>
    </div>
  );
}

export default App;
