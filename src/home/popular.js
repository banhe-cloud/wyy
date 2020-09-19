
import React from "react";
import { useState, useEffect } from "react";
import { getRecommend } from "../api/home";
import "./style/popular.scss"
import { createHashHistory } from 'history';


function toList() {
    const history = createHashHistory();
    history.push('./playList')
}
export default function Popular() {
    let [list, setList] = useState([])
    useEffect(() => {
        getRecommend().then((res) => {
            setList(res.result)
        })
    }, []);
    return (
        <div className="popular">
            <h2 className="popular__title">热门推荐</h2>
            <div className="popular__content">
                {
                    list.map((item, index) => {
                        return (
                            <div className="popular__item" onClick={toList} key={index}>
                                <img className="popular__item__img" src={item.picUrl} alt="" />
                                <p className="popular__item__name" title={item.name}>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}