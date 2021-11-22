 
import './App.css';
import React, { useReducer } from 'react';


import CompA from './components/contextNreducer/CompA.JS';
import CompB from './components/contextNreducer/CompB.JS';
import CompC from './components/contextNreducer/CompC.JS';
import DataFectching from './components/useReducercases/DataFetching';
import DataFetchingTwo from './components/useReducercases/DataFetchingTwo';



export const CountContext = React.createContext()
const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state
  }
}



function App() {
  
  return (
    
    <div className="App">
    
    <DataFetchingTwo/>
      
    </div>
    
  );
}

export default App;
