import dataHelper from '../lib/dataHelper';
//TYPES
const SET_DATA = 'SET_DATA';
const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_DATA:
        const validateData = dataHelper.getValidateData(action.data);
        return Object.assign({}, state, {data: validateData});
    case UPDATE_CURRENT_INDEX:
        return Object.assign({}, state, action);
    default: return state;
  }
}

//ACTIONS
export const setData = (data) => {
    return { type: SET_DATA, data };
}
export const updateCurrentIndex = (currentIndex) => {
    return { type: UPDATE_CURRENT_INDEX, currentIndex };
}


const defaultState = {
    data: [],
    currentIndex: 0,
};