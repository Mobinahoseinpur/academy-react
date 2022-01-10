import React from 'react';
import { BrowserRouter,Route,NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/header/SecondHeader.module.css';
const SecondHeader = () => {
    return ( 
        <React.Fragment>
        {/* <BrowserRouter> */}
        <header className={`${styles.main_header} row `}>
            <div className={`container s col-lg-11 col-md-11 col-sm-11`}>
                <div className="col-lg-1 col-md-1 col-sm-1 " >
                    <div className={`${styles.lgtop} d-none d-lg-block .d-xl-block .d-xxl-none`}></div>
                    <div className={`${styles.logo}  d-lg-none .d-xl-none .d-xxl-block `}></div>
                </div>
                
                
                <div className={`${styles.menu} col-lg-6 col-md-7 `}>
                <input type="checkbox" className={`${styles.ch}`} name="" id=""/>
                <div className={`${styles.res_menu}`}>
                    <div className={`${styles.un_menu}`}>
                        <NavLink className={`${styles.a}`} to="/">
                        <p>صفحه نخست</p>
                        </NavLink>
                    </div>
                    <div className={`${styles.un_menu}`}>
                        <NavLink className={`${styles.a}`} to="/Courses">
                        <p>دوره</p>
                        </NavLink>
                    </div>
                    <div className={`${styles.un_menu}`}>
                        <NavLink className={`${styles.a}`} to="/Article">
                        <p>اخبار/مقالات</p>
                        </NavLink>
                    </div>
                    <div className={`${styles.un_menu}`}>
                        <NavLink className={`${styles.a}`} to="/">
                        <p>اساتید</p>
                        </NavLink>
                    </div>
                    <div className={`${styles.un_menu}`}>
                        <p>تماس با ما</p>
                    </div>
                </div>
                </div>
                <div className={`${styles.left_menu} col-lg-3 col-md-3 col-sm-5`}>
                    <NavLink to="/Login"><div className={`${styles.btnlog_reg } m-1`}></div></NavLink>
                    <div className={`${styles.search} m-1`}> 
                        <div className={`${styles.btn_search}`}></div>
                        <input className={`${styles.search_box}`}/>
                    </div>
                </div>
            </div>
            </header>
            {/* </BrowserRouter> */}
        </React.Fragment>
     );
}
 
export default SecondHeader;