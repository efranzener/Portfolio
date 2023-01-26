import React from 'react';
import { Link } from 'react-router-dom';


function Error () {

    return (
        <>
            <h1>404</h1>
            <p> Page not found</p>
            <Link to='/'>
                <p> back home</p>
            </Link>
        </>
    );
}

export default Error