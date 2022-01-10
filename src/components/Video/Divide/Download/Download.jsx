import React, { Fragment } from 'react'
import DownloadCss from './Download.module.css'
import lock from '../../../../Assets/obj/icon/lock.svg'
import download from '../../../../Assets/obj/icon/download.svg'


const Download = (props) => {
    return (
        <Fragment>
            <div className={DownloadCss.holder}>
                <div className={DownloadCss.vlinks}>
                    <div className={DownloadCss.left}>
                        <div className={DownloadCss.num}><span className={DownloadCss.inside}>{props.num}</span></div>
                        <p className={DownloadCss.name}>{props.arng} </p>
                        <p className={DownloadCss.name}>{props.name} </p>
                        <div className={DownloadCss.lock} >{props.lock}</div>
                    </div>
                    <div className={DownloadCss.right}>
                    <img className={DownloadCss.dnl} src={download} />
							<div className={DownloadCss.dur}>{props.duration}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Download
