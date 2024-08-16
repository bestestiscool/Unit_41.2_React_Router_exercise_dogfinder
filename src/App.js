import React from 'react';
import dogsData from './db';  // Adjust the path as necessary
import Nav from './Nav';     // Import the Nav component
import RouteList from './RouteList';  // Import the RouteList component

function App() {
  return (
    <div className="App">
      
      
      <Nav dogs={dogsData.dogs} />
       
      <RouteList dogs={dogsData.dogs} />  
    </div>
  );
}

export default App;
