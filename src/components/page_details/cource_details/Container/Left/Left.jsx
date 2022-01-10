import React, { Fragment } from 'react'
import LeftCss from './Left.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from '../../Components/Timer/Timer'
import Info from '../../Components/Info/Info'
import About from '../../Components/About/About'
import Social from '../../Components/Social/Social'


const left = () => {
    return (
        <Fragment>
            <div >

                <Timer />
                <Info />
                <About />
                <Social />
            </div>
        </Fragment>
    )
}

export default left
