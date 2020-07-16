import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Hello", duration: "10:0" },
        { title: "You", duration: "5:30" }
    ]
};

// todo: figure out the types
const selectedSongReducer = (selectedSong = null, action: any) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});