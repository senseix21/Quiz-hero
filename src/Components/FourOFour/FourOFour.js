import React from 'react';
import { Link } from 'react-router-dom';

const FourOFour = () => {
    return (
        <div>
            <h1>404 page</h1>
            <p>Go back to  <Link className='text-lg text-blue-400' to={'/'}>home page</Link></p>
        </div>
    );
};

export default FourOFour;