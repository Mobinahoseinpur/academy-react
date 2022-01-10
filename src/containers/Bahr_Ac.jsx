import React, { useEffect } from 'react';
import {Switch,Route,BrowserRouter as Router,  useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from '../components/page_details/details_article/Article'
import Course from '../components/page_details/cource_details/Course';
import Landing from './LandingPage';
import Login from '../Login/Login';
import Register from '../register/Register';
import UserProfile from '../components/Profile/UserProfile';
import Teacher_Landing from '../components/content/teacher_landing/Teacher_Landing';
import Courses from '../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';
import { paginate } from '../utils/paginate';
import jwt from 'jsonwebtoken'
import { addUser } from '../actions/user';

const Bahr_Ac = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedToken = jwt.decode(token, {complete : true});
  //     const dateNow = Date.now()/1000;

  //     if(decodedToken.payload.exp < dateNow)
  //       localStorage.removeItem("token");
  //     else dispatch(addUser(decodedToken.payload.user))
  //   }
  // },[])

    return ( 
      <React.Fragment>
            <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/Login" exact component={Login}/>
              <Route path="/Register"  component={Register}/> 
              <Route path="/Profile" component={UserProfile}/>
              <Route path="/Course/:id"  component={Course}/> 
              <Route path="/Article"  component={Article}/>   
              <Route path="/Teacher" component={Teacher_Landing}/>
              <Route path="/Courses" component={Courses}/>
            </Switch>   
      </React.Fragment>      
     );
}
 
export default Bahr_Ac;


// "toplearnapi": "https://academy-big-bang-team.herokuapp.com/",
// "localapi": "http://localhost:3000"