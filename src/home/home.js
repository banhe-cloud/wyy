import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./style/home.scss";
import { getBanner } from "../api/home";
import Popular from "./popular"

function Home() {
  let [bannerList, setBannerList] = useState([]);
  // bannerList = bannerList.slice(0, 1)
  useEffect(() => {
    getBanner().then((res) => {
      setBannerList(res.banners);
    }).catch((e) => {

    });
  }, []);
  return (
    <div className="home">
      <div className="home__carousel">
        <Carousel autoplay>
          {bannerList.map((item, index) => {
            return (
              <div className="home__carousel__item" key={index}>
                <div
                  style={{ backgroundImage: `url("${item.imageUrl}")` }}
                  className="item_background">
                </div>
                <img className="home__carousel__item__img" src={item.imageUrl} alt="" />
              </div>
            );
          })}
        </Carousel>

      </div>
      <div className="home__content">
        <Popular />
      </div>
    </div >
  );
}
export default Home;
