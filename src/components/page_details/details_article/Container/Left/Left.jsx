import React, { Fragment } from 'react'
import LeftCss from './Left.module.css'
// import '../../Assets/bootstrap/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../../Components/About/About'
import Social from '../../Components/Social/Social'
import Detail from '../../Components/Detail/Detail'


const left = () => {
    return (
        <Fragment>
            <div >
                <Detail/>
                <About />
                <Social />
            </div>
        </Fragment>
    )
}

export default left
