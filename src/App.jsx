import React from 'react';

import logo from './images/googlelogo_color_272x92dp.png';
import SearchBox from './components/SearchBox';
import GButton from './components/Button';
import  Header  from './components/Header/header'

function App() {
  return (<div>
    <Header/>
  
    
    <div className="googleBox">

      <img src={logo} className="App-logo" alt="logo" />
      <SearchBox />
      <div className="buttonBox">
        <GButton text="Google Search" />
        <GButton text="I'm Feeling Lucky" />
      </div>
    </div>
    </div>
  );
}

export default App;
