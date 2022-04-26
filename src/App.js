import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Pagination from '@mui/material/Pagination'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Menu</h1>
        <Home/>
      </header>
      <Pagination/>
    </div>
  );
}

export default App;
