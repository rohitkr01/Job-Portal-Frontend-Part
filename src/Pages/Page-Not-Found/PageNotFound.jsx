import React from 'react';
import './PageNotFound.css';

const PageNotFound = () =>{
    return(
        <div className="not-found-container">
            <h1 className="not-found-heading">404 - Page Not Found</h1>
            <p className="not-found-text">Sorry, the page you're looking for does not exist.</p>
        </div>
    );
}

export default PageNotFound;