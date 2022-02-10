
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../header/Header1';
import './Articlelist.css';

const ArticleList = () => {

  var [data,setData] = useState([]);

 async function dataLoading  (){
    
   
    await axios.get("http://localhost:5001/api/viewall").then(
        (response)=>{
            // console.log(response);
            setData(data = response.data);
            
        }
    )
}
useEffect(
    ()=>{
        dataLoading();
        });


    return (
        <>
        <Header1 />
                <div className="w3-container">
                <h2>Articles</h2>
                <p>Create paper-like cards with the w3-card classes:</p>
                {data.map((i,key)=>(
              
                  <Link className='classlink' key={key} to={`/article/${i.title}`}>
                      <div className="w3-panel w3-card w3-blue">
                        <h3>
                            {i.title}
                        </h3>
                        <p>{i.description}</p>
                      </div>
                      
                  </Link>
               
                
            )
            )}
                
                
                </div>
         {/* <div className='list'>
          <h1>ArticleList</h1> 
          
        </div> */}
        </>
       
    );
};

export default ArticleList;