import { useEffect, useState } from 'react'
import ButtonsBlock from './Components/buttonsBlock/ButtonBlock'
import { MainDisplay } from './Components/mainDisplay/MainDisplay'
import s from './Counter.module.css'

const Counter = () => {

    useEffect(() => {
        let mainValue = localStorage.getItem('counterValue')
        let lastStartValue = localStorage.getItem('startValue')
        let lastMaxValue = localStorage.getItem('maxValue')
        if (mainValue && lastMaxValue && lastStartValue) {
            let newValue = JSON.parse(mainValue)
            let newStartValue = JSON.parse(lastStartValue)
            let newMaxValue = JSON.parse(lastMaxValue)
            setValue(newValue)
            setStartValue(newStartValue)
            setMaxValue(newMaxValue)
        }
    }, [])

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [value, setValue] = useState(startValue)
    const [settingsMod, setSettingsMod] = useState(false)
    const [error, setError] = useState(false)
    const [incDisabled, setIncDisabled] = useState(false)
    const [resDisabled, setResDisabled] = useState(false)
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [value, maxValue, startValue,])

    
    function incValue() {
        if(value < maxValue){
            setValue(value + 1)
            setResDisabled(false)
            if( value + 1 === maxValue){
                setIncDisabled(true)
                setError(true)
            }
    }}
    function resetValue() {
        setValue(startValue)
        setIncDisabled(false)
        setError(false)
        setResDisabled(true)
    }
    function changeStartValue(value: number) {
        setStartValue(value)
    }
    function changeMaxValue(value: number) {
        setMaxValue(value)
    }
    function settingsToggle() {
        if(settingsMod){
            setValue(startValue)
            setStartValue(startValue)
            setMaxValue(maxValue)
            setSettingsMod(false)
            setError(false)
            setResDisabled(false)
            setResDisabled(true)
        }else  setSettingsMod(true)
    }

    return (
        <div className={s.counter}>
            <div className={s.mainDisplay}>
                <MainDisplay
                    value={value}
                    settingsMod={settingsMod}
                    startValue={startValue}
                    maxValue={maxValue}
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    setError={setError}
                    error={error}
                />
            </div>
            <div className={s.buttonsBlock}>
                <ButtonsBlock
                    error={error}
                    incValue={incValue}
                    resDisabled={resDisabled}
                    settingsMod={settingsMod}
                    incDisabled={incDisabled}
                    resetValue={resetValue}
                    settingsToggle={settingsToggle}
                />
            </div>
        </div>
    )
}

export default Counter