import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './Login';
import './SignUp.css';
import validation from './Validation';
import MyForm from '../reading/Reading';
import Home from '../home/Home';
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    let navigate = useNavigate();
    
//Storing form values
    var [formValues,setFormValues] = MyForm({username:"",email:"",password:""});

    //Manage Form Error Values
    const [formErrorValues,setFormErrorValues]= useState({});

    //Flag for form submission Status
    var [isSubmit,setIsSubmit] = useState(false);


    // const handleSignup = (event)=>{
    //     //Destructuring:Technique to get specific values 
    //     const{name,value} = event.target;
    //     setFormValues({...formValues,[name]:value});
    // }
    //Manage Form Refresh
    function handleSignUpSubmit (event){
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(isSubmit=true);
        // const username = formValues.username;
        // const email = formValues.email;
        // const password = formValues.password;
      
        
        // const response = await fetch('http://localhost:6000/api/signup',{
        //     method:'post',
        //     body:JSON.stringify({username,email,password}),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // })
        axios.post("http://localhost:5001/api/signup",formValues).then(
            (response)=>{
                console.log(response);
            }
        )
    };

    useEffect(()=>{
                if(Object.keys(formErrorValues).length === 0 && isSubmit){
                    
                        alert("Success");
                        navigate("/login", { replace: true });
                
                  }
                // Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) :(<Home />)
                 }

             ,[formErrorValues]);

    return (
        <>
        <Header />

<div className='signupbody'>
         <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />
        {/* {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) :null} */}
			<div className="signup">
				<form onSubmit={handleSignUpSubmit}>
					<label  aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={setFormValues} />
                    <p className='signuperrors'>{formErrorValues.username}</p>
					<input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={setFormValues} />
                    <p className='signuperrors'>{formErrorValues.email}</p>
					<input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={setFormValues} />
                    <p className='signuperrors'>{formErrorValues.password}</p>
					<button >Sign up</button>
				</form>
			</div>

		
	</div>

     </div>         
        </>
      
    
        
    );
};

export default SignUp;