import style from './button.module.css'

export default function Button(props){
    return (
        <button className={style.container}>
            <p>{props.text}</p>
        </button>
    )
}
