export const initialState = {
    notes: []
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'ADD_note':
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer