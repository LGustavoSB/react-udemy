import style from './modal.module.css'
import Button from "../button/page";
import CheckedIcon from "@/assets/cheked-icon";

export default function Modal({isVisible, onClose}){
    if (!isVisible){return null}

    return(
        <div className={style.container}>
            <h1 className={style.title}>Formulário enviado com sucesso</h1>
            <CheckedIcon/>
            <button onClick={() => onClose()} className={style.closeButton}><Button text={'Fechar'}/></button>
        </div>
    )
}
