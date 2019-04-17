import { database } from '../firebaseConf'

const SET = 'counter/SET'

export const incAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const currentNumber = state.counter.number
    database.ref('jfddl7').set(currentNumber + 1)
}

export const startCounterSyncAsyncAction = () => (dispatch, getState) => {
    database.ref('jfddl7').on(
        'value',
        (snapshot) => {
            dispatch(
                setActionCreator(
                    snapshot.val()
                )
            )
        }
    )
}

export const stopCounterSyncAsyncAction = () => (dispatch, getState) => {
    database.ref('jfddl7').off()
}


const setActionCreator = number => ({
    type: SET,
    number,
})

const initialState = {
    number: 0,
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET:
            return{
                ...state,
                number: action.number,
            }
        default:
            return state
    }
}