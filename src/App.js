import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderComponent';



<Dialogs />


const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            {/* <Route path='/profile' element={<ProfileContainer />} /> */}
            <Route path='/news' element={<News />} />
            <Route path='/users' element={<UsersContainer />} />
            
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
