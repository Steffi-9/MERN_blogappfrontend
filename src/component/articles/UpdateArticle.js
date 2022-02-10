import React,{ useEffect, useState } from 'react';
import './Article.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MyForm from '../reading/Reading';

function UpdateArticle(props) {
    const {title,id} = useParams();
    console.log({title,id})
    let navigate = useNavigate();

    //Temporary Storage of DB data
    var [articleData,setarticleData] = useState([]);
    

     //Storing form values
     var [formValues,setFormValues] = MyForm({title:articleData.title,description:articleData.description,comment:articleData.comment});

     var [buttonState,setButtonState] = useState(false);

    //Backend Connection API fetch
    useEffect(()=>{
        fetchAPI();
        },[title]
      );
      function fetchAPI(){
        //   const response = await fetch(`http://localhost:5001/api/article/${title}`);
        //   const result =await response.json();
        axios.get(`http://localhost:5001/api/article/${title}`).then(
        (response)=>{
            console.log(response);
            // setData(data = response.data);
            setarticleData(articleData=response.data);
            
            
        }
       )}

       function handleSubmit(event){
        event.preventDefault();
        setButtonState(true);
        axios.post(`http://localhost:5001/api/article/${title}/${id}`,formValues).then(
            (response)=>{
                if(response){
                    alert("Article Succesfully Updated !");
                    navigate('/articlelist', { replace: true });

                }
            }
        )

    }
          
      
   
    

    
    return (
        <div>
           <div className='signupbody'>
         <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />
        
			<div className="signup">
				<form onSubmit={handleSubmit} >
					<label className='labelupdate'  aria-hidden="true">Update Article</label>
					<input type="text" name="title" placeholder="title" required="" value={formValues.title} onChange={setFormValues} />
                    <input type="text" name="description" placeholder="description" value={formValues.description} onChange={setFormValues}  />
                    
					
                    
					<input type="text" name="comment" placeholder="comment" required="" value={formValues.comment} onChange={setFormValues}  />
                    
					<button >Submit</button>
				</form>
			</div>

		
	    </div>

     </div>
        </div>
    );
};

export default UpdateArticle;