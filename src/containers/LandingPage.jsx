import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import Services_landing from '../components/content/Services_Landing/Services_Landing';
import Categuries_Landing from '../components/content/categuries_landing/Categuries_landing';
import Cources_Landing from '../components/content/cources_landing/Cources_Landing';
import Jornal_Landing from '../components/content/Jornal_Landing/Jornal_Landing';
import Teacher_Landing from '../components/content/teacher_landing/Teacher_Landing';
import Offers_landing from '../components/content/offers_landing/Offers_Landing';
import SecondHeader from '../components/SecondHeader';
import { Router,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { paginate } from '../utils/paginate';
const Landing = () => {
  const  courses = useSelector(state => state.courses);
  const indexCourses = paginate(courses ,1 , 6);
  
  const [header, setHeader] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize',()=> setHeader(window.innerWidth))
  })
  
  return ( 
    <React.Fragment>
      
        {header > 1200 ? <MainHeader ></MainHeader>:<p><SecondHeader></SecondHeader> </p>}
        
        <Services_landing></Services_landing>
        <Categuries_Landing></Categuries_Landing>
        <Route  exact render={()=><Cources_Landing courses={indexCourses}/>}/>

        <Jornal_Landing></Jornal_Landing>
        <Teacher_Landing></Teacher_Landing>
        <Offers_landing></Offers_landing>
        <Footer></Footer>
        
    </React.Fragment>
   );
}
export default Landing;