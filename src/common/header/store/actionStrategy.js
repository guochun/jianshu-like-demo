import actionType from './actionType';

const actionStrategy = {

  [actionType.SEARCH_FOCUS]: (state, action) => {

    return state.set('focused', true);
  },

  [actionType.SEARCH_BLUR]: (state, action) => {

    return state.set('focused', false);
  },

  [actionType.UPDATE_HOT_SEARCH_LIST]: (state, action) => {

    return state.merge({
      hotSearchList: action.data,
      totalPage: action.totalPage,
    })

  },

  [actionType.MOUSE_ENTER_HOT_SEARCH_PANEL]: (state, action) => {
    return state.set('mouseIn', true)
  },

  [actionType.MOUSE_LEAVE_HOT_SEARCH_PANEL]: (state, action) => {
    return state.set('mouseIn', false)
  },

  [actionType.CHANGE_HOT_SEARCH_PANEL_PAGE]: (state, action) => {
    return state.set('page', action.page)
  },

}

export default actionStrategy;