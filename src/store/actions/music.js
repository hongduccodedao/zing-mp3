import actionTypes from "./actionType"

export const setCurSongId = (sid) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  sid,
});

export const play = (flag) => ({
  type: actionTypes.PLAY,
  flag,
});

export const playAlbum = (flag) => ({
  type: actionTypes.PLAY_ALBUM,
  flag,
});

export const setPlaylist = (songs) => ({
  type: actionTypes.PLAYLIST,
  songs,
});

export const loading = (flag) => ({
  type: actionTypes.LOADING,
  flag,
});

export const setCurSongData = (data) => ({
  type: actionTypes.SET_CUR_SONG_DATA,
  data,
})

export const setCurAlbumId = (aid) => ({
  type: actionTypes.SET_CUR_ALBUM_ID,
  aid,
})

export const setRecent = (data) => ({
  type: actionTypes.SET_RECENT,
  data,
})

// export const fetchDetailPlaylist = (pid) => async (dispath) => {
//   try {
//     const response = await api.apiGetDetailPlaylist(pid)
//     if(response.data.err === 0) {
//       dispath({
//         type: actionTypes.PLAYLIST,
//         songs: response.data.data.items,
//       })
//     }
//   } catch (error) {
//     dispath({
//       type: actionTypes.PLAYLIST,
//       songs: [],
//     })
//   }
// }