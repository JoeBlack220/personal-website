// dumb action
interface Song {
    name: string,
    duration: string
}
export const selectSong = (song: Song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
