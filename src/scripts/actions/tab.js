import falcor from 'falcor';

/** @type {string} */
const url = API_URL;
/**
 * @type {Object} Falcor model object
*/
const model = new falcor.Model({
    source: new falcor.HttpDataSource(url)
});

/**
* @function getTabsAndSectionsByGeneId
* @desc An async action creator
* @param {string} A gene id
* @param {number} [index=0] - The index of the tab
* @returns {Object} action - An action object
* @param {string[]} action.types - Three action types, GENEID_REQUEST, GENEID_SUCCESS and GENEID_ERROR
* @param {Object} action.payload - A promise object
* @param {string} action.id - The gene id
 */
export const getTabsAndSectionsByGeneId = (id, index = 0) => {
    return {
        types: [
            'GENEID_REQUEST',
            'GENEID_SUCCESS',
            'GENEID_ERROR'
        ],
        payload: model.get([
            'genesById',
            id,
            'tabs',
            index,
            ['display', 'sections'],
            {from: 0, to: 10},
            ['display', 'subsections']
        ]),
        id
    }
}


/**
* @function getSectionsByTabId
* @desc An async action creator
* @param {string} A tab id
* @returns {Object} action - An action object
* @param {string[]} action.types - Three action types, TABID_REQUEST, TABID_SUCCESS and TABID_ERROR
* @param {Object} action.payload - A promise object
* @param {string} action.id - The tab id
 */
export const getSectionsByTabId = (id) => {
    return {
        types: [
            'TABID_REQUEST',
            'TABID_SUCCESS',
            'TABID_ERROR'
        ],
        payload: model.get([
            'tabsById',
            id,
            'sections',
            {from: 0, to: 10},
            ['display', 'subsections']
        ]),
        id
    }
}


/**
* @function getSectionById
* @desc An async action creator
* @param {string} A section id
* @returns {Object} action - An action object
* @param {string[]} action.types - Three action types, SECTIONID_REQUEST, SECTIONID_SUCCESS and SECTIONID_ERROR
* @param {Object} action.payload - A promise object
* @param {string} action.id - The section id
 */
