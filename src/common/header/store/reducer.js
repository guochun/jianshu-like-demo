import actionStrategy from './actionStrategy'
import stateStrategy from '../../../store/stateStrategy';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  hotSearchList: [],
  page: 1,
  totalPage: 1,
}) 

export default (state = defaultState, action) => {
  return stateStrategy(state, action, actionStrategy);
}




