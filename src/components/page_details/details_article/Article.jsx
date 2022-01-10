import React, { Fragment } from 'react';
import { BrowserRouter,Route,Link,NavLink } from 'react-router-dom';
import ArticleCss from './Article.module.css';
// import './Assets/bootstrap/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Left from './Container/Left/Left'
import Right from './Container/Right/Right'
import MainLayout from '../../layouts/MainLayout';

const Aritcle = () => {
    return (
        <Fragment>
            
            <MainLayout> 
            <div className="container">
                <div className="row">
                    <div className={` ${ArticleCss.right} col-md-8 `}><Right /></div>
                    <div className={` ${ArticleCss.left} col-md-4 `}><Left /></div>
                </div>
            </div>
            </MainLayout>
        </Fragment>
    )
}

export default Aritcle;

