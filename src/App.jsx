import React from 'react';
import Profile from './components/Profile';
import './App.css';
import useProfileContext from './contexts/profile/profileContext';

const App = () => {
  return (
    <div className="App">
      <useProfileContext.Provider>
        <Profile />
      </useProfileContext.Provider>
    </div>
  );
};

export default App;
