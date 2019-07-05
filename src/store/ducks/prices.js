export const Types = {
  GET_REQUEST: 'prices/GET_REQUEST',
  GET_SUCCESS: 'prices/GET_SUCCESS',
};

const INITIAL_STATE = {
  prices: [],
};

export default function prices(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUCCESS:
      return { ...state, prices: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getPrices: id => ({
    type: Types.GET_REQUEST,
    payload: id,
  }),
  getPricesSuccess: payload => ({
    type: Types.GET_SUCCESS,
    payload,
  }),
};
