// const apiKey = process.env.GIPHY_API_KEY
const apiKey = "dc6zaTOxFJmzC"

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_GIFS = 'FETCH_GIFS'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchGifs(query) {
    console.log(query)
    return (dispatch, getState) => {
        const params = encodeURIComponent(query).replace(/%20/g, '+')
        return fetch(`https://api.giphy.com/v1/gifs/search?q=` + params + `&api_key=${apiKey}`)
            .then(res => {
                return res.json();
            }).then(json => {
                dispatch({
                    type: FETCH_GIFS,
                    payload: json.data
                })
            })
    }
}

export const actions = {
    fetchGifs
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [FETCH_GIFS]: (state, action) => {
        return Object.assign({}, state, {
            gifs: action.payload
        })
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    gifs: []
}
export default function timelineReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
