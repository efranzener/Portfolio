import React from 'react';
import { Link } from 'react-router-dom';


function Error() {
  return (
    <>
      <h1>404</h1>
      <h2> Page not found</h2>
      <Link to="/">
        <p> back home</p>
      </Link>
    </>
  );
}

export default Error