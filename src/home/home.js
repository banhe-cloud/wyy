import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./style/home.scss";
import { getBanner, getRecommend } from "../api/home";
import Popular from "./popular"

function Home() {

  let [bannerList, setBannerList] = useState([]);
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
          {bannerList.map((item) => {
            return (
              <div className=" home__carousel__item">
                <img className="home__carousel__item__img" src={item.imageUrl} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="home__content">
        <Popular />
      </div>

    </div>
  );
}
export default Home;
