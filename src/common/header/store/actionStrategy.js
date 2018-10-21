import actionType from './actionType';

 const actionStrategy =  {
  
  [actionType.SEARCH_FOCUS]: (state,action) => {
    
    return state.set('focused', true);
  },

  [actionType.SEARCH_BLUR]: (state, action) => {
    
    return state.set('focused', false);
  },

  [actionType.UPDATE_HOT_SEARCH_LIST]: (state, action) => {
    
    return state.set('hotSearchList', action.data);
  }

}

export default actionStrategy;