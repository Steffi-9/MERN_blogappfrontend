function LoginValidation(formValues){
    const errors ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!formValues.email){
        errors.email = "Email is required";
    }
    else if(!regex.test(formValues.email)){
        errors.email = "Email is invalid";
    }
    if(!formValues.password){
        errors.password = "Password is required";
    }
    else if(formValues.password.length < 5){
        errors.password = "Password too short";
    }

    return errors;

}
export default LoginValidation;