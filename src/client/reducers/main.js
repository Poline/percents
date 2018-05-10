//TYPES
const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case UPDATE_CURRENT_INDEX:
        return Object.assign({}, state, action);
    default: return state;
  }
}

//ACTIONS
export const updateCurrentIndex = (currentIndex) => {
    return { type: UPDATE_CURRENT_INDEX, currentIndex };
}

const defaultState = {
    currentIndex: 0,
};
