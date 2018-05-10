import dataHelper from '../lib/dataHelper';
//TYPES
const SET_DATA = 'SET_DATA';
const UPDATE_PERCENT_VALUE = 'UPDATE_PERCENT_VALUE';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_DATA:
        const validateData = dataHelper.getValidateData(action.data);
        return validateData;
    case UPDATE_PERCENT_VALUE:
        const newData = dataHelper.updatePercentValue(state, action.credentials);
        return newData.slice();
    default: return state;
  }
}

//ACTIONS
export const setData = (data) => {
    return { type: SET_DATA, data };
}
export const updatePercentValue = (credentials) => {
    return { type: UPDATE_PERCENT_VALUE, credentials };
}


const defaultState = [];
