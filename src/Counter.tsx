import s from './Counter.module.css'
import {useEffect, useState} from "react";
import {MainDisplay} from "./Components/MainDisplay";
import {ControlButtons} from "./Components/ControlButtons";


const Counter = () => {

    const [activeSettings, setActiveSettings] = useState(false)
    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState(startValue)
    const [maxValue, setMaxValue] = useState(0)
    const [disableInc, setDisableInc] = useState(false)
    const [disableReset, setDisableReset] = useState(true)



    const incValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        } else {
            setDisableInc(true)
        }
    }
    const settings = () => setActiveSettings(!activeSettings)
    const resetValue = () => {
        setValue(startValue)
        setDisableReset(true)
    }
    const incStartValue = (value: number) => {
        setStartValue(value)
        setValue(value)
    }
    const incMaxValue = (value: number) => setMaxValue(value)



    return (
        <div className={s.counter}>
            <MainDisplay activeSettings={activeSettings}
                         value={value}
                         maxValue={maxValue}
                         startValue={startValue}
                         incStartValue={incStartValue}
                         incMaxValue={incMaxValue}
            />
            <ControlButtons incValue={incValue}
                            resetValue={resetValue}
                            settings={settings}
                            activeSettings={activeSettings}
                            value={value}
                            startValue={startValue}
                            maxValue={maxValue}
                            disableInc={disableInc}
                            disableReset={disableReset}
            />
        </div>
    )
}

export default Counter