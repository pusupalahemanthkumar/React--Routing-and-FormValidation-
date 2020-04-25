import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} >
        <span style={{color:'coral'}}><i className="fa fa-bolt" aria-hidden="true"></i>Blog</span>App
    </div>
);
export default logo;