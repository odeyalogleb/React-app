import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {
  debugger;
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar data = {props.state.navbar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path = '/profile' element={<Profile 
            data={props.state.profile} 
            addPost = {props.addPost}
            changeNewPost = {props.changeNewPost} />}/>
            <Route path = '/dialogs/*' element={<Dialogs 
            data={props.state.dialogs} 
            sendMessage = {props.sendMessage}
            changeMsg = {props.changeMsg} />}/>
            <Route path = '/News' element={<News/>}/>
            <Route path = '/Music' element={<Music/>}/>
            <Route path = '/Settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
