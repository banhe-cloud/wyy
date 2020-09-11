import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./home.scss";
import { getBanner } from "../api/home";

let tabArr = [
  { title: "发现音乐" },
  { title: "我的音乐" },
  { title: "朋友" },
  { title: "商城" },
  { title: "音乐人" },
  { title: "下载客户端" },
];
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function Home() {
  let [tabIndex, setTabIndex] = useState(0);
  let [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    getBanner().then((res) => {
      setBannerList(res.banners);
    });
  }, []);
  function changeTab(index) {
    setTabIndex(index);
  }
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__top__content">
          <div className="home__top__content__logo"></div>
          <div className="home__top__content__menu">
            {tabArr.map((item, index) => (
              <div
                onClick={() => {
                  changeTab(index);
                }}
                className={`home__top__content__menu__every ${
                  index == tabIndex
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
      <div class="home__carousel">
        <Carousel autoplay>
          {bannerList.map((item) => {
            return (
              <div class=" home__carousel__item">
                <img class="home__carousel__item__img" src={item.imageUrl} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
export default Home;
