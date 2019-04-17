const SET = 'users/SET'

export const setUsersActionCreator = users => ({
    type: SET,
    users,
})

const initialState = {
    users: null,
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET: 
            return{
                ...state,
                users: action.users,
            }
        default:
            return state
    }
}