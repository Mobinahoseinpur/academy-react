import React , {Fragment}from 'react'
import IllusCss from './Illus.module.css';
import heart from '../../../../Assets/obj/icon/heart.svg';
import webSec from '../../../../Assets/obj/illustration/webSec.svg';

const Illus = () => {
    return (
        <Fragment>

            <div className={IllusCss.holder}>
                <img src={heart} className={IllusCss.like}/>
                <img src={webSec} className={IllusCss.illus}/>
                
            </div>
        </Fragment>
    )
}

export default Illus
