import { authMe } from "./authReducer";


const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED:
            let stateCopy = {
                ...state,
                initialized: true
            }

            return stateCopy
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    promise.then(() => {
        dispatch(initializedSuccess())
    })
};


export default appReducer;