import dataHelper from '../lib/dataHelper';
//TYPES
const SET_DATA = 'SET_DATA';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_DATA:
        const validateData = dataHelper.getValidateData(action.credentials);
        
        return Object.assign({}, state, {data: validateData});
    default: return state;
  }
}

//ACTIONS
export const setData = (credentials) => {
    return { type: SET_DATA, credentials };
}


const defaultState = {
    data: [],
    current: 0,
};