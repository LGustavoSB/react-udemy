'use client'
import { useFormContext } from "react-hook-form"
import findInputError from "@/utils/findInputError"
import isFormValid from "@/utils/isFormValid"
import style from "./input.module.css"

export default function Input(input){
    const {register, formState: {errors}} = useFormContext()

    const inputError = findInputError(errors, input.id)
    const isInvalid = isFormValid(inputError)

    // Adicione a classe inputAbout se o id for 'about'
    const inputClassName = input.id === 'about' ? `${style.input} ${style.inputAbout}` : style.input;

    return (
        <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor={input.id}>{input.label}</label>
            <input className={inputClassName} type={input.type} name={input.name} id={input.id}
                    {...register(input.id, input.validation)}
            />
            {isInvalid && (<InputError message={inputError.error.message} key={inputError.error.message} />)}
        </div>
    );
}
const InputError = ({message}) => {
    return <span className={style.span}>{message}</span>
}
