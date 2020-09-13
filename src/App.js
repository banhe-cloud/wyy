import React from 'react';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home/home'
import SongList from "./songList/songList"
import { useState, useEffect } from "react";
import './App.scss';

let tabArr = [
  { title: "发现音乐" },
  { title: "我的音乐" },
  { title: "朋友" },
  { title: "商城" },
  { title: "音乐人" },
  { title: "下载客户端" },
];
function App() {
  let [tabIndex, setTabIndex] = useState(0);
  function changeTab(index) {
    setTabIndex(index);
  }
  return (
    <Router>
      <div className="home__top">
        <div className="home__top__content">
          <div className="home__top__content__logo"></div>
          <div className="home__top__content__menu">
            {tabArr.map((item, index) => (
              <div
                onClick={() => {
                  changeTab(index);
                }}
                className={`home__top__content__menu__every ${index == tabIndex
                  ? " home__top__content__menu__every--selected"
                  : null
                  }`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/playlist" exact component={SongList} />
    </Router>

  );
}

export default App;
