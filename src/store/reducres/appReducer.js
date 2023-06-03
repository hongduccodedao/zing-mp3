import actionType from "../actions/actionType";

const initState = {
  banner: [],
  newRelease: {},
  isLoading: false,
  weekChart: {},
  playlist: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionType === "banner")
            ?.items || null,
        newRelease:
          action.homeData?.find((item) => item.sectionType === "new-release") ||
          {},
        weekChart:
          action.homeData?.find((item) => item.sectionType === "weekChart")
            ?.items || {},
        playlist:
          action.homeData?.filter((item) => item.sectionType === "playlist") || [],
      };
    case actionType.LOADING:
      return {
        ...state,
        isLoading: action.flag,
      };

    default:
      return state;
  }
};

export default appReducer;
