import React , {Fragment} from 'react'
import OpinionCss from './Opinion.module.css'
import Label from './Label/Label'


const Opinion = () => {
    return (
        <Fragment>
            <div className={OpinionCss.wrapper}>
                <h1 className={OpinionCss.title}>نظرات</h1>
                <Label/>
                <Label/>
                <Label/>
                <a className={OpinionCss.more} href="#">مشاهده بیشتر</a>
                 
            </div>
        </Fragment>
    )
}

export default Opinion
