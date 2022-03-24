import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}



export const Button = (props:ButtonPropsType) => {


    const OnClickHandler = () => {
        props.onClick()
    }


    return (
        <div >
            <button onClick={OnClickHandler} className={s.button} disabled={props.disabled}>
                {props.name}
            </button>
        </div>
    )
}