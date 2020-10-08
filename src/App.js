import React, { useReducer, useRef } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/home'
import NavBar from './home/navBar'
import SongList from "./songList/songList"
import { Reducer, Context } from "./reducer/index"
import './App.scss';
import AudioPlayer from "./component/audioPlayer/audioPlayer"
//test svn2
function App() {
  const [state, dispatch] = useReducer(Reducer);
  const songList = state ? state.song.songList : [];
  const songIndex = state ? state.song.songIndex : 0;
  const idRef = useRef();

  function changeIndex(type) {
    let _index = type === "next" ? songIndex + 1 : songIndex - 1;
    _index >= songList.length && (_index = 0)
    _index < 0 && (_index = songList.length - 1)
    dispatch({
      type: "changeIndex", data: {
        songIndex: _index
      }
    })
  }
  return (
    <Context.Provider value={[state, dispatch]} style={{ overflow: "auto" }}>
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/playlist/:id" exact component={SongList} />
      </Router>
      <AudioPlayer last={() => { changeIndex("last") }} next={() => { changeIndex("next") }} ref={idRef} songList={songList} songIndex={songIndex} />
    </Context.Provider>
  );
}

export default App;
