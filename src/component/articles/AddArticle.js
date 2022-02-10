import React from 'react';
import MyForm from '../reading/Reading';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Article.css';

function AddArticle(props) {
    let navigate = useNavigate();

    //Storing form values
    var [formValues,setFormValues] = MyForm({title:"",description:"",comment:""});

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:5001/api/articles",formValues).then(
            (response)=>{
                if(response){
                    alert("Article Succesfully added !");
                    navigate("/articlelist", { replace: true });

                }
            }
        )

    }
    return (
        <div className='signupbody'>
         <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />
        
			<div className="signup">
				<form onSubmit={handleSubmit} >
					<label  aria-hidden="true">Add Article</label>
					<input type="text" name="title" placeholder="title" required="" value={formValues.title} onChange={setFormValues} />
                    <input type="text" name="description" placeholder="description" value={formValues.description} onChange={setFormValues} />
                    
					
                    
					<input type="text" name="comment" placeholder="comment" required="" value={formValues.comment} onChange={setFormValues}  />
                    
					<button >Submit</button>
				</form>
			</div>

		
	    </div>

     </div>
    );
}

export default AddArticle;