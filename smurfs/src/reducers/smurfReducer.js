import { FETCH_DATA, SET_ERROR, UPDATE_SMURFS, ADD_SMURFS, POST_DATA } from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
      };
    case POST_DATA:
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
    };
    case ADD_SMURFS:
      return {
        ...state,
        isFetchingData: true,
        smurfs: [...state, action.payload]
    };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
