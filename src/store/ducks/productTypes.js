export const Types = {
  GET_REQUEST: 'productTypes/GET_REQUEST',
  GET_SUCCESS: 'productTypes/GET_SUCCESS',
};

const INITIAL_STATE = {
  types: [],
};

export default function productTypes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUCCESS: {
      return { ...state, types: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const Creators = {
  getTypes: id => ({
    type: Types.GET_REQUEST,
    payload: id,
  }),
  getTypesSuccess: payload => ({
    type: Types.GET_SUCCESS,
    payload,
  }),
};
