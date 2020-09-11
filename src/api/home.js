import {get,post} from './request';

const config = "" 

//获取首页轮播图
export function getBanner(params){
    return get(`${config}/banner?type=0`,params)
}