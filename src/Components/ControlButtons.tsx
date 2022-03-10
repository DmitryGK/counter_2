import React, {useState} from "react";
import {Button} from "./Button/Button";
import s from './../Counter.module.css'

type ControlButtonsPropsType = {
    incValue: (value: number) => void
    resetValue: (value: number) => void
    settings: () => void
    activeSettings: boolean
    value: number
    startValue: number
    maxValue: number
    disableInc: boolean
    disableReset: boolean
}


export const ControlButtons = (props: ControlButtonsPropsType) => {



    const [disabled, setDisabled] = useState(false)

    const incValueHandler = () => {
         props.incValue(props.value)
    }
    const resetValueHandler = () => {
        props.resetValue(props.value)
    }
    const settingsHandler = () => {
        props.settings()
    }


    return (props.activeSettings)
        ? <div className={s.buttons}>
            <Button name={'set'}
                    onClick={props.settings}
                    disabled={disabled}

            />
        </div>
        : <div className={s.buttons}>
            <Button name={'inc'}
                    onClick={incValueHandler}
                    disabled={props.disableInc}
            />
            <Button name={'reset'}
                    onClick={resetValueHandler}
                    disabled={props.disableReset}
            />
            <Button name={'set'}
                    onClick={settingsHandler}
                    disabled={disabled}
            />
        </div>
}