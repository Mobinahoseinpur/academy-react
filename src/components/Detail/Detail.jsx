import React , {Fragment}from 'react'
import DetailCss from './Detail.module.css'
import Label from './Label/Label'

const Detail = () => {
    return (
        <Fragment>
            <div className={DetailCss.wrapper}>
                
                <Label />
            </div>
        </Fragment>
    )
}

export default Detail
