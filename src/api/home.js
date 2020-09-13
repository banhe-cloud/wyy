import { get, post } from './request';

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