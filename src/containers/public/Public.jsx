import { Outlet } from "react-router-dom";
import {
  Header,
  Loading,
  Player,
  SidebarLeft,
  SidebarRight,
} from "../../components";
import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";

const Public = () => {
  const [isShowSidebarRight, setIsShowSidebarRight] = useState(true);
  const { isLoading } = useSelector((state) => state.app);
  const {curSongId} = useSelector((state) => state.music);
  const [isShowPlayer, setIsShowPlayer] = useState(curSongId !== null);


  useEffect(() => {
    setIsShowPlayer(curSongId !== null);
  }, [curSongId]);

  return (
    <div className="w-full h-screen flex flex-col bg-main-300 relative">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] flex-none h-full">
          <SidebarLeft />
        </div>
        <div className="flex-auto flex flex-col relative ">
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-main-300 flex items-center justify-center">
              <Loading />
            </div>
          )}
          <div className="h-[70px] flex-none px-[59px] flex items-center">
            <Header />
          </div>
          <div className="flex-auto w-full">
            <Scrollbars
              autoHide
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowSidebarRight && (
          <div className="w-[329px] flex-none hidden 1600:flex animate-slide-left">
            <SidebarRight />
          </div>
        )}
      </div>
      {isShowPlayer && (
        <div className="h-[90px] fixed bottom-0 left-0 right-0 z-20 w-full">
          <Player setIsShowSidebarRight={setIsShowSidebarRight} />
        </div>
      )}
    </div>
  );
};

export default Public;
