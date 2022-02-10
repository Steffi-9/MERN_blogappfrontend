import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../error/Error';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Articlelist.css';
import Header1 from '../header/Header1';

const Article = () => {

    const {title} = useParams();
    let navigate = useNavigate();
    let id;

     //Temporary Storage of DB data
     var [articleData,setarticleData] = useState([]);

    //Matching title parameter
    // const article = articleData.find(i=>i.title === title);

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
            console.log(response.data);
            // setData(data = response.data);
            setarticleData(articleData=response.data);
            
        }
       )
        
          
      }

      function DeleteArticle(){
          console.log("hi")
          axios.delete(`http://localhost:5001/api/article/${title}/delete`).then(
              (response)=>{
                if(response){
                    alert("Article Succesfully deleted !");
                    navigate("/articlelist", { replace: true });

                }
              }

          )
      }

      
    //   if(!article) return <Error />
    function UpdateArticle(){
         id = articleData._id;
         console.log(id);
        navigate(`/article/${title}/${id}`,{ replace: true })
       
    }
    return (
        <>
        <Header1 />
         <div className='articletitle'>
           <h1>Article title : {articleData.title} </h1>
           <h4>Article Description: {articleData.description}</h4>
           <p>{articleData.comment}</p>
           <button className='buttonClass' onClick={UpdateArticle}>Update</button>
           <button className='buttonClass' onClick={DeleteArticle}>Delete</button>
           
        </div>
        </>
       
    );
};

export default Article;