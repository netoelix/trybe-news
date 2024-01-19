type ActionType = {
  type: string;
  payload: number;
};

const initialState = {
  counter: 0,
};

const reducers = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'OI':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

export default reducers;
