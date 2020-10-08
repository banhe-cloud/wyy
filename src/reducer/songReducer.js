let initState = {
    songList: [],
    songIndex: 0
}
export default function songReducer(state = initState, action) {
    switch (action.type) {
        case "playSong": return {
            ...state,
            songList: action.data.songList,
            songIndex: action.data.songIndex
        }
        case "changeIndex": return {
            ...state,
            songIndex: action.data.songIndex
        }
        default: return state
    }
}   