import actionType from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';
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

const updateHotSearchListAction = (data) => {
  return {
    type: actionType.UPDATE_HOT_SEARCH_LIST,
    data: fromJS(data)
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