import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Teacher_Landing.module.css';

const Teacher_Landing = () => {
    return ( 
        <React.Fragment>
            <div id="teacher" className={`${styles.teacher_academy} row container`} >
                <p className={styles.categories_academy_title}> اساتید دوره</p>
                <div className="row justify-content-center">
                    {/* <!-- t1 --> */}
                    <div className={`${styles.teacher} col-lg-3 m-3  `}>
                        <div className={styles.img_teacher_size}>
                            <img  className={styles.img_courcses} src="./obj/img/img/pic6.png" alt=""/>
                        </div>
                        <div className={styles.txt_title_jornal_academy}>متن تست</div>
                        <p className={styles.txt_content_jornal_academy}> اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </p>
                    </div>

                    {/* <!-- t2 --> */}

                    <div className={`${styles.teacher} col-lg-3 m-3 `}>
                        <div className={styles.img_teacher_size}>
                            <img  className={styles.img_courcses} src="./obj/img/img/pic6.png" alt=""/>
                        </div>
                        <div className={styles.txt_title_jornal_academy}>متن تست</div>
                        <p className={styles.txt_content_jornal_academy}> اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </p>
                    </div>

                    {/* <!-- t3 --> */}

                    <div className={`${styles.teacher} col-lg-3 m-3 `}>
                        <div className={styles.img_teacher_size}>
                            <img  className={styles.img_courcses} src="./obj/img/img/pic6.png" alt=""/>
                        </div>
                        <div className={styles.txt_title_jornal_academy}>متن تست</div>
                        <p className={styles.txt_content_jornal_academy}> اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </p>
                    </div>
                </div>
            </div>


        </React.Fragment>
     );
}
 
export default Teacher_Landing;