import { Routes, Route } from "react-router-dom";
import {
  Album,
  Home,
  Login,
  Public,
  Search,
  SearchAll,
  SearchArtist,
  SearchPlaylist,
  SearchSong,
  Singer,
  WeekRank,
  ZingChart,
} from "./containers/public";
import path from "./utils/path";
import { useEffect } from "react";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
          <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
          <Route path={path.WEEKRANK__TITLE__PID} element={<WeekRank />} />
          <Route path={path.ZINGCHART} element={<ZingChart />} />
          <Route path={path.SEARCH} element={<Search />}>
            <Route path={path.ALL} element={<SearchAll />} />
            <Route path={path.SONG} element={<SearchSong />} />
            <Route path={path.SEARCH_PLAYLIST} element={<SearchPlaylist />} />
            <Route path={path.SEARCH_ARTIST} element={<SearchArtist />} />
          </Route>
          <Route path={path.HOME_SINGER} element={<Singer />} />
          <Route path={path.HOME_ARTIST_SINGER} element={<Singer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
