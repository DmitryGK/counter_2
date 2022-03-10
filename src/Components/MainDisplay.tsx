import React from "react";
import s from './../Counter.module.css'
import {Input} from "./Input/Input";

type MainDisplayPropsType = {
    activeSettings: boolean
    value: number
    startValue: number
    maxValue:number
    incStartValue: (value: number) => void
    incMaxValue: (value: number) => void
}


export const MainDisplay = (props: MainDisplayPropsType) => {
    return (props.activeSettings)
        ? <div className={s.display}>
            <div>
                <Input value={props.maxValue} title={'max value'} onChangeHandler={props.incMaxValue}/>
            </div>
            <div>
                <Input value={props.startValue} title={'start value'} onChangeHandler={props.incStartValue}/>
            </div>
        </div>
        : <div className={s.display}>
            <div className={s.value}>{props.value}</div>
        </div>

}



