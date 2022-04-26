type IncValueACType = {
    type: 'INC-VALUE'
}
type resetValueACType = {
    type: 'RESET-VALUE'
}
type changeStartValueACType = {
    type: 'CHANGE-START-VALUE'
}
type changeMaxValueACType = {
    type: 'CHANGE-MAX-VALUE'
}
type toggleSettingsModeACType = {
    type: 'TOGGLE-SETTINGS-MOD'
}
type setErrorACType = {
    type: 'SET-ERROR'
}

type ActionType =
    IncValueACType |
    resetValueACType |
    changeStartValueACType |
    changeMaxValueACType |
    toggleSettingsModeACType |
    setErrorACType
    
type InitialStateType = typeof InitialState

const InitialState = {
    value: 0,
    startValue: 0,
    maxValue: 0,
    settingsMode: false,
    error: false
}

export const counterValueReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state,
                value: state.value + 1
            }
        case 'RESET-VALUE':
            return {
                ...state,
                value: state.value = 0
            }

        default:
            return state
    }


}

export const incValueAC = () => {
    return { type: 'INC-VALUE' }
}
export const resetValueAC = () => {
    return { type: 'RESET-VALUE' }
}
export const changeStartValueAC = () => {
    return { type: 'CHANGE-START-VALUE' }
}
export const changeMaxValueAC = () => {
    return { type: 'CHANGE-MAX-VALUE' }
}
export const toggleSettingsModeAC = () => {
    return { type: 'TOGGLE-SETTINGS-MOD' }
}
export const setErrorAC = () => {
    return { type: 'SET-ERROR' }
}