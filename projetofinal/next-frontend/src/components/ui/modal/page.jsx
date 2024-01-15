import Image from "next/image";
import style from './modal.module.css'
import Button from "../button/page";

export default function Modal({isVisible, onClose}){
    if (!isVisible){return null}

    return(
        <div className={style.container}>
            <h1 className={style.title}>Formulário enviado com sucesso</h1>
            <Image src={'/vector.svg'} width={100} height={100} alt="Formulario enviado"/>
            <button onClick={() => onClose()} className={style.closeButton}><Button text={'Fechar'}/></button>
        </div>
    )
}