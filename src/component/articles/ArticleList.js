
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='list'>
          <h1>ArticleList</h1> 
          {data.map((i,key)=>(
              <ul>
                  <li>
                  <Link className='classlink' key={key} to={`/article/${i.title}`}><h3>{i.title}</h3></Link>
                  </li>
              </ul>
                
            )
            )} 
        </div>
    );
};

export default ArticleList;