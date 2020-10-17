import React from 'react';
import './App.css';
import ItemList from '../ItemList/ItemList';

//<img src="img/Shadow.png" className="App-background" alt="shadow" />

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      Ты сегодня покормил кота?
      </header>
      <ItemList />
    </div>
  );
}

export default App;
