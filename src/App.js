
import './App.css';
import SignUp from './component/signUp/SignUp';
import Header from './component/header/Header';
import Home from './component/home/Home';
import ArticleList from './component/articles/ArticleList';
import Article from './component/articles/Article';

import Error from './component/error/Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './component/signUp/Login';
import { useState } from 'react';
import AddArticle from './component/articles/AddArticle';
import UpdateArticle from './component/articles/UpdateArticle';

function App() {

  const[articlerender,setarticlerender] = useState(false);

   function toggleheader(props){
     setarticlerender(!articlerender);
   }
  return (
    <Router>
    {/* <Header /> */}
    <>
     <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/signup' element={<SignUp />} />
         <Route path='/login' element={<Login />} />
         <Route path='/articlelist'  element={<ArticleList />} />
        <Route path='/addarticle' element={<AddArticle />} />
          
         <Route path='/article/:title' element={<Article />} />
         <Route path='/article/:title/:id' element={<UpdateArticle />} />
         
         <Route path='*' element={<Error />} />
         

         
       </Routes>
    </>
      
  </Router>
  );
}

export default App;
