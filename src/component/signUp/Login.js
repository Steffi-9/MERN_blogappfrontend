
import './SignUp.css';
import MyForm from '../reading/Reading';
import React, { useEffect, useState } from 'react';
import loginValidation from './loginValidation';
import axios from 'axios';
import Home from '../home/Home';
import ArticleList from '../articles/ArticleList';
import { useNavigate } from "react-router-dom";

const Login = () => {
 
	let navigate = useNavigate();
	//Storing form values
    var [formValues,setFormValues] = MyForm({email:"",password:""});

	  //Manage Form Error Values
	  var [formErrorValues,setFormErrorValues]= useState({});

	  //Flag for form submission Status
	  const [isSubmit,setIsSubmit] = useState(false);
	  const [success,setsuccess] = useState(false);


	  async function handleLoginSubmit(event){
		//   console.log("hi")
		event.preventDefault();
        setFormErrorValues(loginValidation(formValues));
        // setIsSubmit(true);
		await axios.post("http://localhost:5001/api/login",formValues).then(
            (response)=>{
                // console.log(response);
				let result = response.data.status;
				// console.log(result);
				if(result === "success")
				{
				setsuccess(true);
				console.log(success);
			    }
				
				
            }
        )
		
		

	  }

	  useEffect(()=>{
		if(Object.keys(formErrorValues).length === 0 && success ){
			navigate("/articlelist", { replace: true });
			
			//  if(success){
			//  	navigate("/", { replace: true });
		    //      }
			//  else{
			//  	alert("Invalid Credentials");
			//  	navigate("/signup",{replace:true})
			//  }
		
		}
		
		// Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) :(<Home />)
		 }

	 ,[formErrorValues,success]);

    return (
		<div className='loginbody'>
			<div className='main'>
			{/* {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Home />) :null} */}
            	<div className='login'>
				<form onSubmit={handleLoginSubmit}>
					<label  aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" value={formValues.email} onChange={setFormValues} required="" />
					<p className='loginerrors'>{formErrorValues.email}</p>
					<input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={setFormValues} />
					<p className='loginerrors'>{formErrorValues.password}</p>
					<button>Login</button>
				</form>
			</div>
            
        </div>

		</div>
        
    );
}

export default Login;