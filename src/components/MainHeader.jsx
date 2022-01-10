import React from 'react';
import { BrowserRouter,Route,Link,NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/header/styleHeader.module.css';



const MainHeader = () => {
    return (
        <React.Fragment>
            {/* <BrowserRouter> */}
            <header className={styles.h_main}  >
            <div className={`${styles.h_main_div_right} col-lg-6`}>

                <div className={styles.main_shape}> </div>
                <div className={styles.lgtop}>BAHR ACADEMY</div>
                <div className={styles.lgbut}>FIND YOUR VIDEO ON THIS PAGE</div>
                <ul className={styles.menu}>
                    <li className={styles.un_menu}><NavLink to="/Courses">دوره </NavLink></li>
                    <li className={styles.un_menu}><NavLink to="/Article">اخبار/مقالات</NavLink></li>
                    <li className={styles.un_menu}>اساتید</li>
                    <li className={styles.un_menu}>تماس با ما</li>
                </ul>
                <div className={styles.txt_main}>
                    <div className={styles.main_title_text}>اکادمی بحر ...</div>
                    <div className={styles.main_content_txt} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
                    <div className={styles.search_box}>
                        <input className={styles.inp} type="text"  placeholder="چه چیزی نیاز دارید"/>
                        <div className={styles.searchbtn}></div>
                    </div>

                    {/* <!-- shape --> */}
                    <div className={`${styles.shp1} d-none d-lg-block`}></div>
                    <div className={`${styles.shp2} d-none d-lg-block`}></div>
                    <div className={`${styles.shp3} d-none d-lg-block`}></div>
                </div>
            </div>


            <div className={`${styles.h_main_div_left} col-lg-6`}>
                <div className={styles.btnlog_reg}>
                    <div className={styles.txtlog_reg}>
                        <ul className={styles.ulstyle}>
                            <li className={styles.remove_style_ul}><NavLink to="/Register"> ثبت نام  </NavLink></li>
                            <li className={styles.remove_style_ul}><NavLink to="/Login"> ورود  /</NavLink></li>
                        </ul>
                        </div>
                </div>

                {/* <img className={styles.mainimg} src='./obj/illustration/developermain.svg'   alt=""/> */}
                <img className={styles.mainimg} src='./obj/illustration/Pablita_internet_news_by_Icons8.gif' ></img>
                <div className={`${styles.shp4} d-none d-lg-block`}></div>
                <div className={`${styles.shp5} d-none d-lg-block`}></div>
                <div className={`${styles.shp6} d-none d-lg-block`}></div>
            </div>
        </header>

        {/* </BrowserRouter> */}
        </React.Fragment>
      );
}
 
export default MainHeader;