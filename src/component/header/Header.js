import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    // const[s,sets]= useState(false);
    return (
        <div>
           <div className='header'>
                <nav className='nav'>
                    <h1 className='logo'> Article Blog</h1>
                    <div className='art' >
                        <Link className='articles'  to="/">Home</Link>
                    
                        <Link className='articles'  to="/articlelist" >Articles</Link>
                        <Link className='articles' to="/addarticle">AddArticles</Link>
                        <Link className='articles' to="/signup">SignUp</Link>
                        <Link className='articles' to="/login">Login</Link>
                    </div>
                </nav>
            
            </div> 
        </div>
    );
};

export default Header;