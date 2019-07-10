export const Types = {
  ADD_ORDER: 'cart/ADD_ORDER',
  REMOVE_ORDER: 'cart/REMOVE_ORDER',
  CLEAR_ORDER: 'cart/CLEAR_ORDER',
};
const INITIAL_STATE = {
  orders: [],
  fullPrice: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ORDER: {
      const orders = [...state.orders, action.payload];
      const fullPrice = orders.reduce((iterator, item) => iterator + parseFloat(item.price), 0.0);
      return { ...state, orders, fullPrice };
    }
    case Types.REMOVE_ORDER: {
      const orders = state.orders.filter(order => order.id !== action.payload);
      const fullPrice = orders.reduce((iterator, item) => iterator + parseFloat(item.price), 0.0);
      return { ...state, orders, fullPrice };
    }
    case Types.CLEAR_ORDER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  addOrder: payload => ({
    type: Types.ADD_ORDER,
    payload,
  }),
  removeOrder: id => ({
    type: Types.REMOVE_ORDER,
    payload: id,
  }),
  clearOrder: () => ({
    type: Types.CLEAR_ORDER,
  }),
};
