import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between px-10 text-lg font-medium p-3 bg-green-100'>
                <div className="logo text-3xl font-bold">
                    <p>Quiz<span className='text-green-800'>Hero</span></p>
                </div>
                <div className="navlink">
                    <Link className='mx-2' to={'/'}>Home</Link>
                    {/* <Link className='mx-2' to={'/quiz'}>Quiz</Link> */}
                    <Link className='mx-2' to={'/about'}>About</Link>
                </div>
                <div>
                </div>

            </nav>
        </div>
    );
};

export default Header;