import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import "./home.scss";
import {get,post} from "../api/request"

let tabArr = [
    { title: "发现音乐" },
    { title: "我的音乐" },
    { title: "朋友" },
    { title: "商城" },
    { title: "音乐人" },
    { title: "下载客户端" }
]
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
function Home() {
    let [tabIndex, setTabIndex] = useState(0);
    function changeTab(index) {
        setTabIndex(index)
    }
    return (
        <div className="home">
            <div className="home__top">
                <div className="home__top__content">
                    <div className="home__top__content__logo">

                    </div>
                    <div className="home__top__content__menu">
                        {
                            tabArr.map((item, index) => <div onClick={() => { changeTab(index) }} className={index == tabIndex ? "home__top__content__menu__every home__top__content__menu__every--selected" : "home__top__content__menu__every"}>{item.title}</div>)
                        }
                    </div>
                </div>
            </div>
            <div class="home__carousel">
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>11</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
export default Home