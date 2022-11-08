import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/login'>login</Link>
            <Link to='/Register'>Register</Link>
        </div>
    );
};

export default Header;