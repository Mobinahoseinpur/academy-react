import React, { Fragment, useState } from 'react'
import InfoCss from './Info.module.css'


const Info = () => {
    const [time] = useState("3 ساعت");
    const [cost] = useState("84,000");
    const [level] = useState("پیشرفته");
    const [last] = useState("1400,05,13");
    const [videos] = useState("24");

    return (
        <Fragment>
            <div className={InfoCss.wrapped} >
                <h1 className={InfoCss.title}>اطلاعات دوره</h1>
                <ul className={InfoCss.list}>
                    <li>
                        <p className={InfoCss.detail}>مدت زمان:</p>
                        <div>{time}</div>
                    </li>
                    <li>
                        <p className={InfoCss.detail}>هزینه:</p>
                        <div className={InfoCss.price}>{cost}</div>
                    </li>
                    <li className="li">
                        <p className={InfoCss.detail}>سطح دوره:</p>
                        <div>{level}</div>
                    </li>
                    <li>
                        <p className={InfoCss.detail}>تاریخ آخرین به روز رسانی:</p>
                        <div>{last}</div>
                    </li>
                    <li>
                        <p className={InfoCss.detail}>تعداد ویدیو ها:</p>
                        <div>{videos}</div>
                    </li>

                </ul>
                <button className={InfoCss.btn} >خرید دوره</button>
            </div>
        </Fragment>
    )
}

export default Info
