import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional';
import Login from './components/Login';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>

        <Condicional />

        <Login /> 
      </header>
    </div>
  );
  
}

export default App;
