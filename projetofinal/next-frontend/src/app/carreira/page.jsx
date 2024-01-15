'use client'
import Input from "@/components/ui/input/page"
import Modal from "@/components/ui/modal/page"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import style from "./carreira.module.css"


export default function Carreira(){
    const [showModal, setShowModal] = useState(false)
    const methods = useForm()


    const onSubmit = methods.handleSubmit(() => {
        setShowModal(true)
    })


    return(
        <div className={style.container}>
            {showModal && <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>}
            <FormProvider {...methods}>
                <div  id="form-vaga">  
                    <h1 className={style.title} >Formulário de Vaga</h1>
                    <form className={style.containerForm} noValidate onSubmit={e => e.preventDefault()}>
                        <Input type={'text'} name={'inputName'} id={'name'} label={'Nome:'} validation={{required: {value: true,message: 'Obrigatório'}}} />
                        <Input type={'email'} name={'inputEmail'} id={'email'} label={'Email:'} validation={{required: {value: true,message: 'Obrigatório'},pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email Inválido'}}}/>
                        <Input type={'url'} name={'inputPortfolio'} id={'portfolio'} label={'Link para portfólio:'} validation={{required: {value: true,message: 'Obrigatório'}}}/>
                        <Input type={'text'} name={'inputAbout'} id={'about'} label={'Por que você quer fazer parte da Jojos?'} validation={{required: {value: true,message: 'Obrigatório'}}} />
                        <button className={style.button} type="submit" onClick={onSubmit}>Enviar formulario</button>
                    </form>
                </div>
            </FormProvider>
        </div>
    )
}   