import { useState } from 'react'
import { Input } from '../Input/Input'
import s from './MainDisplay.module.css'


type MainDisplayPropsType = {
    value: number
    settingsMod: boolean
    startValue: number
    maxValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    setError: (value: boolean) => void
    error: boolean
}

export const MainDisplay = (props: MainDisplayPropsType) => {


    function valueController() {
        if(props.startValue < 0 || props.maxValue < 0) {
            props.setError(true)
        }else if (props.startValue > props.maxValue) {
            props.setError(true)
        } else if (props.startValue < props.maxValue) {
            props.setError(false)
        } 
    }


    return (props.settingsMod)
        ? <div className={s.display}>
            <div className={s.inputRow}>
                <Input
                    title='max value : '
                    value={props.maxValue}
                    onChangeHandler={props.changeMaxValue}
                    onChangeValue={valueController}
                    error={props.error}
                />
            </div>
            <div className={s.inputRow}>
                <Input
                    title='start value : '
                    value={props.startValue}
                    onChangeHandler={props.changeStartValue}
                    onChangeValue={valueController}
                    error={props.error}
                />

            </div>
        </div>
        : <div className={s.display}>
            <div className={props.error ? s.maxValue : s.value}>
                {props.value}
            </div>
        </div>


}

