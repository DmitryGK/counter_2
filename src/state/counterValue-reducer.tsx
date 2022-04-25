type IncValueACType = {
    type: 'INC-VALUE'
}
type resetValueACType = {
    type: 'RESET-VALUE'
}

type ActionType = IncValueACType | resetValueACType
type InitialStateType = typeof InitialState

const InitialState = {
    value: 0,
    startValue: 0,
    maxValue: 0, 
    settingsMode: false
}

export const counterValueReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case 'INC-VALUE' : 
            return {
                ...state,
                value : state.value + 1
            } 
        case 'RESET-VALUE' :
            return {
                ...state,
                value: state.value = 0
            }
        default:
             return state
    }
        
    
}

export const incValueAC = () => {
    return {type: 'INC-VALUE'}
}

export const resetValueAC = () => {
    return {type: 'RESET-VALUE'}
}