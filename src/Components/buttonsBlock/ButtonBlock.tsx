import { Button } from "./Button/Button"
import s from './Buttons.module.css'

type ButtonsBlockPropsType = {
    incValue: () => void
    resetValue: () => void
    settingsToggle: () => void
    error: boolean
    settingsMod: boolean
    incDisabled: boolean
    resDisabled: boolean
}

const ButtonsBlock = (props: ButtonsBlockPropsType) => {
    return (props.settingsMod)
        ? <div className={s.buttons}>
            <Button name='set' onClick={props.settingsToggle} disabled={props.error}/>
        </div>
        : <div className={s.buttons}>
            <Button name='inc' onClick={props.incValue} disabled={props.incDisabled}/>
            <Button name='reset' onClick={props.resetValue} disabled={props.resDisabled}/>
            <Button name='set' onClick={props.settingsToggle} disabled={false}/>

        </div>

}

export default ButtonsBlock