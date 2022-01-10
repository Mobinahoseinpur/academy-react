import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Jornal_Landing.module.css';

const Jornal_Landing = () => {
    return ( 
        <React.Fragment>
            <div className={`${styles.jornal_academy} container`}>
                <p className={styles.jornal_academy_title}> اخبار و مقالات</p>
                <div className="row d-flex justify-content-center ">
                {/* <!-- j1--> row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3*/}
                <div className={`${styles.jornal} col-lg-3 col-md-3 col-sm-3 m-3`}>
                    <div className={styles.img_jornal_size}>
                        <img  className={styles.img_jornal} src="./obj/img/img/pic1.png" alt=""/>
                    </div>
                    <div className={styles.txt_title_jornal_academy}>نکاتی برای راه‌اندازی مشاغل فریلنسر</div>
                    <div className={styles.txt_content_jornal_academy}> اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </div>
                </div>

                {/* <!-- j2 --> */}

                <div className={`${styles.jornal} col-lg-3 col-md-3 col-sm-3  m-3`}>
                    <div className={styles.img_jornal_size}>
                        <img  className={styles.img_jornal} src="./obj/img/img/pic2.png" alt=""/>
                    </div>
                    <div className={styles.txt_title_jornal_academy}> تبدیل شدن به یک توسعه دهنده وب </div>
                    <div className={styles.txt_content_jornal_academy}> اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </div>
                </div>

                {/* <!-- j3 --> */}

                <div className={`${styles.jornal} col-lg-3 col-md-3 col-sm-3  m-3`}>
                    <div className={styles.img_jornal_size}>
                        <img  className={styles.img_jornal} src="./obj/img/img/pic6.png" alt=""/>
                    </div>
                    <div className={styles.txt_title_jornal_academy}>برنامه نویس DevOps</div>
                    <div className={styles.txt_content_jornal_academy}> اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </div>
                </div>
            </div>
            <div className={`d-flex justify-content-center`}>
                <div className={`${styles.courses_academy_seemore} col-lg-2`} >مشاهده بیشتر</div>
            </div>
            </div>

            <img className={`${styles.shp7} d-none d-lg-block`} src="./obj/img/img/shp/3sqr.svg" alt=""/>
            <img className={`${styles.shp8} d-none d-lg-block`} src="./obj/img/img/shp/sqr8.svg" alt=""/>
        </React.Fragment>
     );
}
 
export default Jornal_Landing;