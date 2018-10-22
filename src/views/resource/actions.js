const actions = {
  start: msg => {
    return {
      type: 'START',
      payload: msg
    };
  }
};

export default actions;
