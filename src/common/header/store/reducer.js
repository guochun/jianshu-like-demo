import actionStrategy from './actionStrategy'
import stateStrategy from '../../../store/stateStrategy';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  hotSearchList: [],
}) 

export default (state = defaultState, action) => {
  return stateStrategy(state, action, actionStrategy);
}




