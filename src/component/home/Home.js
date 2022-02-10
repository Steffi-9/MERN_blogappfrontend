import React from 'react';
import Header from '../header/Header';
import './Home.css';
import logo from '../img/article.jpg'

const Home = () => {
    return (
        <>
        <Header />
          <div className='sign' >
         
              <div className='mainn'>
                  <div className='blog'>
                    <h1 >Welcome to Article Blog</h1> 
                    <p>An article is any member of a class of dedicated words that are used with noun phrases to mark the
                    identifiability of the referents of the noun phrases. The category of articles constitutes a part of speech.
    
                    In English, both "the" and "a/an" are articles, which combine with nouns to form noun phrases. Articles typically 
                    specify the grammatical definiteness of the noun phrase, but in many languages, they carry additional grammatical 
                    information such as gender,number, and case. Articles are part of a broader category called determiners, which also include demonstratives,
                    possessive determiners, and quantifiers. In linguistic interlinear glossing, articles are abbreviated as art.
                    </p>
                    <img  src={logo} alt="Logo"/>
                  </div>
              
              </div>
              
              
               
                 
             
            
         </div>
        </>
      
    );
};

export default Home;