import React  , { Fragment}from 'react'
import LabelCss from './Label.module.css'

const Label = (props) => {
    return (
        <Fragment>
            <div className={LabelCss.holder}>
            <ul className={LabelCss.list}>
                
                <li className={LabelCss.line}>
                    <div className={LabelCss.back}></div>
                    <p className={LabelCss.text}>مبینا حسین پور</p>
                </li>
                <li className={LabelCss.line}>
                    <div className={LabelCss.back1}></div>
                    <p className={LabelCss.text}>354</p>
                </li>
                <li className={LabelCss.line}>
                    <div className={LabelCss.back2}></div>
                    <p className={LabelCss.text}>5 تیر 1400</p>
                </li>
            </ul>
            </div>
        </Fragment>
    )
}

export default Label
