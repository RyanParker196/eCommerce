import React from 'react';
import MyCardDeck from './Comps/MyCardDeck'
import Paypal from './Comps/Paypal'
import MyNav from './Comps/MyNav'
// import './App.css';

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyCardDeck />
      <Paypal />
    </div>
  );
}

export default App;
