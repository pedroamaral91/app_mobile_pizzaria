export const Types = {
  GET_REQUEST: 'orders/GET_REQUEST',
  GET_REQUEST_SUCCESS: 'orders/GET_REQUEST_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
};

export default function orders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST_SUCCESS:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getRequestSuccess: payload => ({
    type: Types.GET_REQUEST_SUCCESS,
    payload,
  }),
};
