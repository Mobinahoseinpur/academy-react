import React from 'react';
import styles from '../components/footer/styleFooter.module.css';

const Footer = () => {
    return ( 
        <React.Fragment>
            <footer className={styles.ftr}>
            
                <div className={styles.footerback} ></div>
                <div className={styles.footerfront} ></div>

            <div className={styles.textfooter}>
                <div className={styles.lgtopfooter}></div>
                <p className={styles.unertebatbama}><b>ادرس :</b>&nbsp; ساری میدان ساعت ، خ 18 دی ، روبروی خیام ، مجتمع مازیار واحد 15 </p>
                <p className={styles.unertebatbama1}><b>تماس با ما :</b>&nbsp; 0933-296-5018</p>
                <p className={styles.unertebatbama2}><b>درباره ما :</b>&nbsp; دوره پایلوت پاییزه برنامه سازی وب
از صفر و بصورت رایگان از ابتدای مهر ماه برگزار خواهد شد

این دوره چند هفته‌ای جهت ایجاد علاقه و استعدادیابی برگزار میشه
</p>
            </div> 
        </footer>

        </React.Fragment>
        
        );
}
 
export default Footer;
