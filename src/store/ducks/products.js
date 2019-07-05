export const Types = {
  GET_REQUEST: 'products/GET',
  GET_SUCCESS: 'products/GET_SUCCESS',
};

const INITIAL_STATE = {
  products: [],
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUCCESS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getProducts: () => ({
    type: Types.GET_REQUEST,
  }),
  getProductsSuccess: payload => ({
    type: Types.GET_SUCCESS,
    payload,
  }),
};
