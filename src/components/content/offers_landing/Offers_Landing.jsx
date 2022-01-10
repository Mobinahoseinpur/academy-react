import React,{useState} from 'react';
// import { Formik, Field, Form } from "formik";
// import rategif from './../../../obj/illustration/pablita_rating_transparent.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Offers_Landing.module.css';

 const Offers_landing = () => {

    return ( 
        <React.Fragment>
            <div class={`${styles.help_academy} row container`}>
                <p class={styles.categories_academy_title}>انتقادات و پیشنهادات</p>
                <div class=" d-flex justify-content-center">
                <div class={`${styles.info} col-lg-6 col-md-6 col-sm-12`} >
                    
                    <form>
                    <input class={styles.txtcolor}
                    type="text" 
                    placeholder="نام و نام خانوادگی"
                    />

                    <input class={styles.txtcolor}
                    type="email" 
                    placeholder="ایمیل"
                    />

                    <input class={styles.txtcolor}
                    type="text" 
                    placeholder="متن ..."
                    />
                    <input class={styles.txtcolor} type="button" value="ثبت"/>
                    </form>
                </div>
                <div class={`${styles.img_help} col-lg-6 col-md-6 col-sm-5 d-none d-sm-block d-sm-none d-md-block`}>
                     <img class={`${styles.img_main} row-cols-sm-4`} src="./obj/img/illustration/working-with-laptop-2080962.svg" alt=""/>
                     {/* <img class={`${styles.img_main} row-cols-sm-4`} src={rategif} alt=""/> */}
                </div>
            </div>
            </div>

        
        </React.Fragment>
     );
}
 
export default Offers_landing;
