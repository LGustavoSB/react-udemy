const isFormValid = (error) => {
    if (Object.keys(error).length > 0){return true}else{return false}
}

export default isFormValid