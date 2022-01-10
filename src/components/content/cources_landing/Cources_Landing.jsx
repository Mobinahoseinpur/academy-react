import React from 'react';
import styles from './Cources_Landing.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Cources_Landing = ({ courses }) => {


    return ( 
        <React.Fragment>
            <div className={`${styles.courses_academy} container `}>
                <p className={styles.cources_academy_title}> دوره های ما</p>
                <div className="row d-flex justify-content-center "> 


                {courses.map(course => (
                 <div 
                 key={course._id} 
                 className= {`${styles.courses}  col-lg-3  m-3`} >
                    <div className={styles.img_courcses_size}>
                        <Link to={`/Course/${course._id}`}>
                        <img  
                        
                        // test api
                        src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                        className={styles.img_courcses} 
                        />
                        </Link>
                    </div>
                    <div className={styles.price_categories_course} >
                        <div className={styles.categories_course}> ui/ux Design</div>
                        <div className={styles.pice_course}>250،000</div>
                    </div>
                    <p className={`${styles.txt_content_courses_academy} card-text`}>
                        <Link to={`/Course/${course._id}`}>
                        {course.title}
                        </Link>
                    </p>
                    <div className={`${styles.preview_num_video} `}>
                        <img className={styles.preview_num_video_img } src="../../../obj/icon/play.svg" alt=""/>
                        <div className={styles.preview_num_video_txt}>24 درس</div>
                    </div> 
                    <div className={styles.courses_academy_star_nextpage}>
                        <span className={styles.courses_academy_star}></span>
                        <img  className={styles.courses_academy_nextbutton} src="../../../obj/icon/nex_Page.svg" alt=""/>
                    </div>
                </div>
            ))}

            </div>

               <div className={`d-flex justify-content-center`}>
                <Link to="/Courses" >
                    <div className= {`${styles.courses_academy_seemore} col-lg-2  `} >مشاهده بیشتر</div>
                </Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Cources_Landing;

// "localapi": "localhost:3001"