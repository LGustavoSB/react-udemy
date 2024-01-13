'use client'
import Input from "@/components/ui/input/page"
import Modal from "@/components/ui/modal/page"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

export default function Carreira(){
    const [showModal, setShowModal] = useState(false)
    const methods = useForm()


    const onSubmit = methods.handleSubmit(() => {
        setShowModal(true)
    })


    return(
        <div>
            <FormProvider {...methods}>
                <div id="form-vaga">  
                    <h1 >Formulario Carreira</h1>
                    <form noValidate onSubmit={e => e.preventDefault()}>
                        <Input type={'text'} name={'inputName'} id={'name'} label={'Nome:'} validation={{required: {value: true,message: 'required'}}}/>
                        <Input type={'email'} name={'inputEmail'} id={'email'} label={'Email:'} validation={{required: {value: true,message: 'required'},pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address'}}}/>
                        <Input type={'url'} name={'inputPortfolio'} id={'portfolio'} label={'Link para portfólio:'} validation={{required: {value: true,message: 'required'}}}/>
                        <Input type={'text'} name={'inputAbout'} id={'about'} label={'Por que você quer fazer parte da Jojos?'} validation={{required: {value: true,message: 'required'}}} />
                        <button type="submit" onClick={onSubmit}>Enviar formulario</button>
                    </form>
                </div>
            </FormProvider>
            {showModal && <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>}
        </div>
    )
}