import React from 'react';
import MyForm from '../reading/Reading';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Article.css';
import Header1 from '../header/Header1';

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
        <>
        <Header1 />
        <div className='articlesignupbody'>
                <div className="articlemain">  	
                <input type="checkbox" id="chk" aria-hidden="true" />
                
                    <div className="signup">
                        <form onSubmit={handleSubmit} >
                            <label  aria-hidden="true">Add Article</label>
                            <input type="text" name="title" placeholder="Enter title" required="" value={formValues.title} onChange={setFormValues} />
                            <textarea row="50" col="50" type="text" name="description" placeholder="Enter description" value={formValues.description} onChange={setFormValues} />
                            
                            
                            
                            <textarea row="50" col="50" type="text" name="comment" placeholder="Enter comment" required="" value={formValues.comment} onChange={setFormValues}  />
                            
                            <button className='articlebutton'>Submit</button>
                        </form>
                    </div>

                
                </div>

            </div>
        </>
                
    );
}

export default AddArticle;