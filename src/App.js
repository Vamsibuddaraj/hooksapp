import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentA from './components/contexthook/ComponentA';



export const UserContext = React.createContext()



function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'vamsi'} >
        <ComponentA/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
