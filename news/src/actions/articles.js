export const SET_DATA = 'actions/set_data';

import { DUMMY_DATA } from 'constants';

export function setData(data){
  return{
    type: SET_DATA,
    data
  }
}

export function loadData(){
  return (dispatch, getState) => {
    dispatch(setData(DUMMY_DATA));
  }
}
