import React from 'react';
import { useState, useRef, useContext } from "react";
import './style/navBar.scss';
import { login } from "../api/home"
import { Modal, Input } from 'antd';
import { Context } from "../reducer/index"

const tabArr = [
    { title: "发现音乐" },
    { title: "我的音乐" },
    { title: "朋友" },
    { title: "商城" },
    { title: "音乐人" },
    { title: "下载客户端" },
];
function NavBar() {
    const [tabIndex, setTabIndex] = useState(0);
    const [visibleLogin, setVisibleLogin] = useState(false);
    const [state, dispatch] = useContext(Context)
    const idRef = useRef()
    function changeTab(index) {
        setTabIndex(index);
    }
    function toLogin() {
        setVisibleLogin(true)
    }
    function handleOk() {
        let id = idRef.current.state.value;
        login({
            uid: id
        }).then((res) => {
            localStorage.setItem("userId", id)
            setVisibleLogin(false)
            dispatch({ type: "sign", data: res })
        })

    }
    return (
        <div className="home__top">
            <div className="home__top__content">
                <div className="home__top__content__logo"></div>
                <div className="home__top__content__menu">
                    {tabArr.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                changeTab(index);
                            }}
                            className={`home__top__content__menu__every ${index === tabIndex
                                ? " home__top__content__menu__every--selected"
                                : null
                                }`}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                {
                    state && state.isLogin ? null :
                        <div className="home__top__content__login" onClick={toLogin}>登录</div>

                }
            </div>


            <Modal
                title="登录"
                visible={visibleLogin}
                onOk={handleOk}
            // onCancel={this.handleCancel}
            >
                <Input placeholder="请输入您的网易云id" ref={idRef} value="1522624056" />
            </Modal>
        </div >


    );
}

export default NavBar;
