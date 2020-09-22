import { get } from './request';

const config = "http://localhost:9000"


//获取首页轮播图
export function getBanner(params) {
    return get(`${config}/banner?type=0`, params)
}

//获取首页热门推荐
export function getRecommend(params) {
    return get(`${config}/personalized?limit=10`, params)
}


//获取首页热门推荐分类
export function getSort(params) {
    return get(`${config}/playlist/hot`, params)
}
//登录
export function login(params) {
    return get(`${config}/user/detail`, params)
}

//获取歌单列表
export function getSongList(params) {
    return get(`${config}/song/detail`, params)
}

//获取歌单详情
export function getSongDetail(params) {
    return get(`${config}/playlist/detail`, params)
}

