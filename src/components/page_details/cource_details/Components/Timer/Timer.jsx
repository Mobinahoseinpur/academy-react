import React, { Fragment } from 'react'
import TimerCss from './Timer.module.css'

const Timer = () => {
    return (
        <Fragment>
            <div className={TimerCss.wrapped} >
                <h1 className={TimerCss.title}>فرصت باقی مانده تخفیف</h1>
                <div className={TimerCss.holder}>
                    <div className={TimerCss.top}>
                        <div className={TimerCss.hour}>
                            <div className={TimerCss.num}>1</div>
                            <div className={TimerCss.num}>2</div>
                            <p className={TimerCss.colon}>:</p>
                            <div className={TimerCss.num}>1</div>
                            <div className={TimerCss.num}>2</div>
                            <p className={TimerCss.colon}>:</p>
                            <div className={TimerCss.num}>1</div>
                            <div className={TimerCss.num}>2</div>
                        </div>
                    </div>
                    <div className={TimerCss.bottom}>
                        <p className={TimerCss.text}>ساعت</p>
                        <p className={TimerCss.text}>دقیقه</p>
                        <p className={TimerCss.text}>ثانیه</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Timer
