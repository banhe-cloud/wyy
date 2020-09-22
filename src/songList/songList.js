import React, { useEffect, useState } from "react";
import "./style/songList.scss"
import { getSongList, getSongDetail } from "../api/home";
export default function SongList(props) {
    let [list, setList] = useState([])
    useEffect(() => {
        let id = props.match.params.id;
        getSongDetail({ id }).then((res) => {
            let idArr = res.privileges.map(item => item.id);
            return getSongList({ ids: idArr.join() })
        }).then((res) => {
            setList(res.songs)
        })
    }, [])
    return (
        <div className="songList">
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>{item.name}</div>
                        )

                    })
                }
            </div>
        </div>
    )
}