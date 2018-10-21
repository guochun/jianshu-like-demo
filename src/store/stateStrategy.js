const stateStrategy = (state, action, strategy) => {

  const containType = action.type in strategy;
  if (containType) {
    return strategy[action.type](state, action)
  }
  return state;
}

export default stateStrategy;
