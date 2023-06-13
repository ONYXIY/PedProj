import React from 'react';
import classes from './News.module.css';

const News = (props) => {
    return (
        <div className = {classes.content}>
            <h1 className = {classes.text}>Braking news</h1>
            <h3 className = {classes.text}>You are idiot</h3>
            
        </div>
    )
}
export default News;