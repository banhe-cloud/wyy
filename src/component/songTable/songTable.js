import React from "react";
import { useState, useEffect } from "react";
import { Table, Tag, Space } from 'antd';
import "./songTable.scss"
export default function SongTable(props) {
    let datas = props.data;
    const columns = [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: '歌曲标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '时长',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '歌手',
            dataIndex: 'person',
            key: 'person',
        },
        {
            title: '专辑',
            dataIndex: 'album',
            key: 'album',
        },
    ]
    const data = datas.map((item, index) => {
        let miao = (item.dt / 1000).toFixed(2) * 1000
        let min = parseInt(miao / 60);
        let sec = miao % 60
        return {
            key: index + 1,
            index: index + 1,
            title: item.name,
            time: min + ":" + sec,
            person: item.ar[0].name,
            album: item.al.name
        }
    })
    return (
        <Table columns={columns} dataSource={data} style={{ border: "1px solid #f0f0f0" }} pagination={false} />
    )
}