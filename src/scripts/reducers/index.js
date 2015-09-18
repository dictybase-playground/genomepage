/*
 * @type {Object} initialState - The initial state for the reducer
 * @param {string} initialState.id - The gene id
 * @param {Object} initialState.response - The response object
 * @param {Object} initialState.error - The error object
 * @param {boolean} initialState.loading - Toggle the loading status
*/
const initialState = {
    id: null,
    response: null,
    error: null,
    loading: false
};


/**
* @function geneIdReducer
* @desc Reducer for GENEID action types
* @param {Object} The initial state
* @param {Object} The action object
 */
export const geneIdReducer = (state = initialState, action) => {
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
                response: action.payload,
                error: null,
                loading: false
        };
        case 'GENEID_ERROR':
            return {
                ...state,
                id: action.id,
                error: action.payload,
                response: null,
                loading: false
        };
        default:
            return state;
    }
}

/**
* @function tabIdReducer
* @desc Reducer for TABID action types
* @param {Object} The initial state
* @param {Object} The action object
 */
export const tabIdReducer = (state = initialState, action) => {
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
                response: action.payload,
                error: null,
                loading: false
        };
        case 'TABID_ERROR':
            return {
                ...state,
                id: action.id,
                error: action.payload,
                response: null,
                loading: false
        };
    }
}
