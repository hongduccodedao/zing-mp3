/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import icons from "../utils/icons";
import { useNavigate } from "react-router-dom";

const { MdKeyboardArrowRight } = icons;

const Section = ({data}) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const albumPath = item?.link?.split(".")[0];
    navigate(albumPath);
  };

  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold capitalize">{data?.title}</h3>
        <span className="flex items-center gap-2 text-gray-600">
          Tất cả <MdKeyboardArrowRight size={20} />
        </span>
      </div>
      <div className="flex items-start gap-5">
        {data &&
          data?.items?.slice(0, 5).map((item) => (
            <div
              className="flex flex-col gap-3 flex-auto w-1/5 cursor-pointer h-auto"
              key={item.encodeId}
              onClick={() => handleClick(item)}
            >
              <img
                src={item.thumbnailM}
                alt="thumbnail"
                className="w-full rounded-md"
              />
              <p className="text-sm line-clamp-2 text-gray-800">
                {item.sortDescription}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Section);
