import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Categuries_landing.module.css'

const Categuries_Landing = () => {
    return ( 
        <React.Fragment>
            
            <div className={` ${styles.categories_academy}  row d-flex justify-content-center`}>
                <p className={`${styles.categories_academy_title} justify-content-center`}> دسته بندی ها</p>
 
                <div className={`${styles.categories_academy_content} col-lg-2 col-md-2 col-sm-2`}>
                    <img className={`${styles.categories_academy_content_img} `} src="./obj/img/img_categuries/communication-and-connectivity-1.svg" alt=""/>
                    <p className={`${styles.categories_academy_content_title} `}>وب</p>
                </div>
                <div className={`${styles.categories_academy_content} col-lg-2 col-md-2 col-sm-2`}>
                    <img className={styles.categories_academy_content_img} src="./obj/img/img_categuries/communication-and-connectivity-2.svg" alt=""/>
                    <p className={styles.categories_academy_content_title}>هک و امنیت</p>
                </div>
                <div className={`${styles.categories_academy_content} col-lg-2 col-md-2 col-sm-2`}>
                    <img className={styles.categories_academy_content_img} src="./obj/img/img_categuries/communication-and-connectivity-3.svg" alt=""/>
                    <p className={styles.categories_academy_content_title}>هوش مصنوعی</p>
                </div>
                <div className={`${styles.categories_academy_content} col-lg-2 col-md-2 col-sm-2`}>
                    <img className={styles.categories_academy_content_img} src="./obj/img/img_categuries/communication-and-connectivity-4.svg" alt=""/>
                    <p className={styles.categories_academy_content_title}>داده کاوی</p>
                </div>
                <div className={`${styles.categories_academy_content} col-lg-2 col-md-2 col-sm-1`}>
                    <img className={styles.categories_academy_content_img} src="./obj/img/img_categuries/communication-and-connectivity-5.svg" alt=""/>
                    <p className={styles.categories_academy_content_title}>طراحی رابط کاربری</p>
                </div>

            </div>
            
        </React.Fragment>
     );
}
 
export default Categuries_Landing;