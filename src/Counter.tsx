import s from './Counter.module.css'
import {useState} from "react";


const Counter = () => {

    const [active, setActive] = useState(false)

    return (
        <div className={s.main}>
            <div>
                <input type={"number"}/>
                <input type={"number"}/>
            </div>
            <div>
                <button>inc</button>
                <button>set</button>
                <button>reset</button>
            </div>
        </div>
    )
}

export default Counter