import { START_FETCHING,SUCCESS_GET_ARTIKEL } from "../actions/artikelAction"

const initialState = {
    artikels:[],
    isLoading: false
}

function artikelReducer(state = initialState, action) {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_GET_ARTIKEL:
            return {
                isLoading: false,
                artikels: [...action.payload]
            }
        default: return state
    }
}

export default artikelReducer