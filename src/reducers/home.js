export default (state = { text: '' }, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
