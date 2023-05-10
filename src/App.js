import logo from './logo.svg';
import createProfile from './utils/createProfile';

import './App.css';

function App() {

  function create_profile() {
    createProfile();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
          <p className='profile' onClick={create_profile}>create profile</p>
      
      </header>
    </div>
  );
}

export default App;
