const allNewsReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'FETCH_ALL_NEWS':
      return action.payload;
    default:
      return state;
  }
};

const newsReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'FETCH_NEWS':
      return action.payload;
    default:
      return state;
  }
};

const releaseReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'FETCH_RELEASE':
      return action.payload;
    default:
      return state;
  }
};

export { allNewsReducer, newsReducer, releaseReducer };
