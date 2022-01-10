import React from 'react'
import styles from './Content.module.css'
import Right from './Right/Right'
import Left from './Left/Left'


const Content = () => {
    return (
        <React.Fragment>
            <div className={`${styles.course_Academy} container `}>
                <div className="row">
                    <div className={` ${styles.right} col-md-8 `}><Right /></div>
                    <div className={` ${styles.left} col-md-4 `}><Left /></div>
                </div>
            </div>

        </React.Fragment>


    )
}

export default Content
