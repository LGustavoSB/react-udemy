'use client'
import { useFormContext } from "react-hook-form"
import findInputError from "@/utils/findInputError"
import isFormValid from "@/utils/isFormValid"

export default function Input(input){
    const {register, formState: {errors}} = useFormContext()

    const inputError = findInputError(errors, input.id)
    const isInvalid = isFormValid(inputError)

    return (
        <div>
            <label htmlFor={input.id}>{input.label}</label>
            <input type={input.type} name={input.name} id={input.id}
                    {...register(input.id, input.validation
                      )}/>
            {isInvalid && (<InputError message={inputError.error.message} key={inputError.error.message} />)}
        </div>)
}

const InputError = ({message}) => {
    return <span>{message}</span>
}


