import React from 'react';
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            About
        </div>
    );
};

export default AboutPage;
