import React, { useEffect, useState, useContext } from "react";
import "./style/songList.scss"
import { getSongList, getSongDetail } from "../api/home";
import { Context } from "../reducer/index";
import SongTable from "../component/songTable/songTable"
export default function SongList(props) {
    const [list, setList] = useState([]);
    const [info, setInfo] = useState({});
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        let id = props.match.params.id;
        getSongDetail({ id }).then((res) => {
            let idArr = res.privileges.map(item => item.id);
            setInfo(res.playlist)
            return getSongList({ ids: idArr.join() })
        }).then((res) => {
            setList(res.songs)
        })
    }, [])

    function playSong(item, index) {
        dispatch({
            type: "playSong", data: {
                songList: list,
                songIndex: index
            }
        })
    }
    return (
        list.length ? <div className="songList center_content">
            <div className="songList_info">
                <img className="info_img" src={info.coverImgUrl} />
                <div className="info_detail">
                    <div className="detail_name">{info.name}</div>
                    <div className="detail_creator">
                        <img className="detail_creator_avatar" src={info.creator.avatarUrl} />
                        <div className="creator_name">{info.creator.nickname}</div>

                        <div>{new Date(info.updateTime).toLocaleDateString().replace(new RegExp('/', "g"), '-')}   创建</div>

                    </div>
                    <div className="detail_play">播放</div>

                    <div className="detail_sort">
                        标签：
                        {
                            info.tags.map(item => {
                                return (
                                    <div className="sort_every">{item}</div>
                                )
                            })
                        }
                    </div>
                    <div className="detail_intro">简介：{info.description}</div>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <SongTable data={list} />

            </div>
        </div> : null
    )
}