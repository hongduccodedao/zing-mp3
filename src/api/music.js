/* eslint-disable no-async-promise-executor */
import axios from "../axios";

export const apiGetSong = (sid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/song",
        method: "GET",
        params: { id: sid },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDetailSong = (sid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/infosong",
        method: "GET",
        params: { id: sid },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDetailPlaylist = (pid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/detailplaylist",
        method: "GET",
        params: { id: pid },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiSearch = (keyword) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/search",
        method: "GET",
        params: { keyword: keyword },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetArtistSong = (singerId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/artistsong",
        method: "GET",
        params: {
          id: singerId,
          page: 1,
          count: 50,
        },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetArtist = (alias) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/artist",
        method: "GET",
        params: {
          name: alias,
        },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
