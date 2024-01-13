import Image from "next/image";
import style from './modal.module.css'

export default function Modal({isVisible, onClose}){
    if (!isVisible){return null}

    return(
        <div className={style.container}>
            <button onClick={() => onClose()}>X</button>
            <h1>Formulário enviado com sucesso</h1>
            <Image src={'/vector.svg'} width={100} height={100} alt="Formulario enviado"/>
        </div>
    )
}