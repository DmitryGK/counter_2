import React, {ChangeEvent, useEffect, useState} from "react";

type InputPropsType = {
    value: number
    title: string
    onChangeHandler: (value: number) => void
}




export const Input = (props: InputPropsType) => {

    const [value, setValue] = useState(props.value)
    useEffect( () => {
        props.onChangeHandler(value)
    }, [props, value])

    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.currentTarget.value))
    }

    return (
        <div>
            {props.title}<input type={'number'} value={props.value} onChange={OnChangeHandler}/>
        </div>
    )
}