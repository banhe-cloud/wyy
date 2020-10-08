let initState = {
    isLogin: false,
    userInfo: {}
}
export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case "sign": return {
            ...state,
            isLogin: true,
            userInfo: action.data
        }
        case "signOut": return {
            isLogin: false,
            userInfo: {}
        }
        default: return state
    }
}   