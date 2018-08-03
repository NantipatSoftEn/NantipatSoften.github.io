import {REQUEST_REPO_FETCH, RECEIVED_REPO_FETCH, ERROR_REPO_FETCH} from './users.type';

const initialState = {
    data: [],
    error: {},
    isFetching: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_REPO_FETCH:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVED_REPO_FETCH:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data
            }

        case ERROR_REPO_FETCH:
            return {
                ...state,
                error: {}
            }

        default:
            return state
    }
}