import React, { ChangeEvent, useEffect, useState } from "react";
import s from './input.module.css'

type InputPropsType = {
    value: number
    title: string
    error: boolean
    onChangeHandler: (value: number) => void
    onChangeValue: () => void
}




export const Input = (props: InputPropsType) => {

    const [value, setValue] = useState(props.value)
    useEffect(() => {
        props.onChangeHandler(value)
        props.onChangeValue()
    }, [props, value])

    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.currentTarget.value))

    }

    return (
        <div>
            {props.title}<input
                type={'number'}
                value={props.value}
                className={ props.error ? s.error : s. input}
                onChange={OnChangeHandler} />
        </div>
    )
}