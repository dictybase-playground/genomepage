const initialState = {
    id: null,
    response: null,
    error: null,
    loading: false
};


export function geneIdReducer(state = initialState, action) {
    switch (action.type) {
        case 'GENEID_REQUEST':
            return {
                ...state,
                id: action.id,
                loading: true
        };
        case 'GENEID_SUCCESS':
            return {
                ...state,
                id: action.id,
                response: action.response,
                error: null,
                loading: false
        };
        case 'GENEID_ERROR':
            return {
                ...state,
                id: action.id,
                error: action.error,
                response: null,
                loading: false
        };
        default:
            return state;
    }
}


export function tabIdReducer(state = initialState, action) {
    switch (action.type) {
        case 'TABID_REQUEST':
            return {
                ...state,
                id: action.id,
                loading: true
        };
        case 'TABID_SUCCESS':
            return {
                ...state,
                id: action.id,
                response: action.response,
                error: null,
                loading: false
        };
        case 'TABID_ERROR':
            return {
                ...state,
                id: action.id,
                error: action.error,
                response: null,
                loading: false
        };
        default:
            return state;
    }
}
