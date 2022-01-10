import React, { Fragment, useEffect, useState } from 'react';
import CourseCss from './Course.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Left from './Container/Left/Left'
import Right from './Container/Right/Right'
import MainLayout from '../../layouts/MainLayout'
import { getSingleCourse } from "./../../../actions/course";
import { useDispatch, useSelector } from 'react-redux';

const Course = ({match}) => {
  const course = useSelector(state => state.course) ;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCourse(match.params.id));
    console.log(match);
  },[]); 



  return (
    <Fragment>
      <MainLayout>
      <div className="container">
        <div className="row">
          <div className={` ${CourseCss.right} col-md-8 `}><Right title={course.title} imageUrl={course.imageUrl} info={course.info}/></div>
          <div className={` ${CourseCss.left} col-md-4 `}><Left/></div>
        </div>
      </div>
      </MainLayout>
    </Fragment>
  )
}

export default Course

