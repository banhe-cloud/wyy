import React, { useReducer } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/home'
import NavBar from './home/navBar'
import SongList from "./songList/songList"
import { loginReducer, Context } from "./reducer/index"
import './App.scss';
import AudioPlayer from "./component/audioPlayer/audioPlayer"
//test svn2
function App() {
  const [state, dispatch] = useReducer(loginReducer)
  return (
    <Context.Provider value={[state, dispatch]}>
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/playlist/:id" exact component={SongList} />
      </Router>
      <AudioPlayer />
    </Context.Provider>


  );
}

export default App;
