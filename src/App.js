import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile//Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';



<Dialogs />


const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <Nav />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
