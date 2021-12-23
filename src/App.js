import React from 'react';
import { BrowserRouter, Route }from 'react-router-dom';
import './App.css';
import './header.css';
import NavigationBar from './components/Narbar'
import Header from './components/Header'
import Main from './components/Main'
import Main2 from './components/Main2';
import Main3 from './components/Main3.jsx';
// const Header = lazy(()=> import('./components/Header'));

function App() {
  return (
    <div className="App">
      <NavigationBar /> 
      <Header />
      <Main />
      <Main2 />
      <Main3 />

    </div>
  );
}

export default App;
