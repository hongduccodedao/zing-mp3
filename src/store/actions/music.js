import actionTypes from "./actionType";
import * as api from "../../api";

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
});

export const setCurAlbumId = (aid) => ({
  type: actionTypes.SET_CUR_ALBUM_ID,
  aid,
});

export const setRecent = (data) => ({
  type: actionTypes.SET_RECENT,
  data,
});

export const search = (keyword) => async (dispath) => {
  dispath({
    type: actionTypes.LOADING,
    flag: true,
  });
  try {
    const response = await api.apiSearch(keyword);
    dispath({
      type: actionTypes.LOADING,
      flag: false,
    });
    if (response.data.err === 0) {
      dispath({
        type: actionTypes.SEARCH,
        data: response.data.data,
        keyword,
      });
    } else {
      dispath({
        type: actionTypes.SEARCH,
        data: null,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.SEARCH,
      data: null,
    });
  }
};

export const getSearchSong = (singerId) => async (dispath) => {
  try {
    const response = await api.apiGetArtistSong(singerId);
    if (response.data.err === 0) {
      console.log(response.data.data.items);
      dispath({
        type: actionTypes.PLAYLIST,
        songs: response.data.data.items,
      });
    } else {
      dispath({
        type: actionTypes.PLAYLIST,
        songs: null,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.PLAYLIST,
      songs: null,
    });
  }
};
