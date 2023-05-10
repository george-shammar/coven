import logo from './logo.svg';
import CreateProfile from './CreateProfile';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header profile">
        <img src={logo} className="App-logo" alt="logo" />
    
          {/* <p className='profile' onClick={create_profile}>create profile</p> */}
          <CreateProfile/>
      
      </header>
    </div>
  );
}

export default App;
