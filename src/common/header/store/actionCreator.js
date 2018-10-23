import actionType from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';


const updateHotSearchListAction = (data) => {
  return {
    type: actionType.UPDATE_HOT_SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
  }
}

export const createSearchFocusAction = () => {
  return {
    type: actionType.SEARCH_FOCUS
  }
}

export const createSearchBlurAction = () => {
  return {
    type: actionType.SEARCH_BLUR
  }
}

export const createMouseEnterHotSearchPanelAction = () => {
  return {
    type: actionType.MOUSE_ENTER_HOT_SEARCH_PANEL
  }
}

export const createMouseLeaveHotSearchPanelAction = () => {
  return {
    type: actionType.MOUSE_LEAVE_HOT_SEARCH_PANEL
  }
}

export const createChangeHotSearchPanelPage = (page) => {

  return {
    type: actionType.CHANGE_HOT_SEARCH_PANEL_PAGE,
    page,
  }
}

export const getHotSearchList = () => {

  return (dispatch) => {
    axios.get('/api/hotSearchList.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(updateHotSearchListAction(data))
      })
      .catch((ex) => {
        console.log(ex)
      })
  }
}