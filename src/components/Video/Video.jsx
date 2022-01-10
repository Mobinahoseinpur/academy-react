import React, { Fragment } from 'react'
import VideoCss from './Video.module.css'
import Show from './Divide/Show/Show'
import Download from './Divide/Download/Download'
import lock from "../../Assets/obj/icon/lock.svg"



const Video = () => {
    return (
        <Fragment>
            <div className={VideoCss.wrapper}>
                <Show/>
                <Download
                    num="1"
                    arng="ویدیو اول :"
                    name="آشنایی با هک و امنیت"
                    duration="00:13:46"
                />
                <Download
                    num="2"
                    arng="ویدیو دوم :"
                    name="آشنایی با هک و امنیت"
                    duration="00:8:13"
                />
                <Download
                    num="3"
                    arng="ویدیو سوم :"
                    name="آشنایی با هک و امنیت"
                    duration="00:11:43"
                />
            </div>

        </Fragment>
    )
}

export default Video
