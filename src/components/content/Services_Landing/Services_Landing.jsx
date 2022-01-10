import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Services_Landing.module.css'

const Services_landing = () => {
    return (
        <React.Fragment>
            
            <div className={`${styles.services_academy} row parent`}>
                <p className={`${styles.ser_title} col-12 text-center`}>خدمات ما</p>
                <p className={`${styles.ser_title_but} col-12 text-center`}>لورم ایپسوم متن ساختگی با تولید سادگی</p>

                <div className={`col-6 col-sm-6 col-md-6 col-lg-3 text-center`} > 
                    <img className={`img-fluid w-25`} src="./obj/img/img_sevices/business-1.svg" alt=""/>
                    <p className={`text-center`} >امتحان</p>
                    <p  className={`text-center`}>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                </div>

                <div className={`col-6 col-sm-6 col-md-6 col-lg-3 text-center`} >
                    <img className={`img-fluid w-25`} src="./obj/img/img_sevices/business-2.svg" alt=""/>
                    <p className={`text-center`}>مدرک معتبر</p>
                    <p className={`text-center`}>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                </div>

                <div className={`col-6 col-sm-6 col-md-6 col-lg-3 text-center`} >
                    <img className={`img-fluid w-25`} src="./obj/img/img_sevices/business-3.svg" alt=""/>
                    <p className={`text-center`}>فرصت های شغلی</p>
                    <p className={`text-center`}>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                </div>

                <div className={`col-6 col-sm-6 col-md-6 col-lg-3 text-center`} >
                    <img className={`img-fluid w-25`} src="./obj/img/img_sevices/business-4.svg" alt="" />
                    <p className={`text-center`} >مشاهده</p>
                    <p className={`text-center`}>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Services_landing;