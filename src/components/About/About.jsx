import React , {Fragment,useState} from 'react'
import AboutCss from './About.module.css'
import pic2 from '../../Assets/obj/img/img/pic2.png'
import angleDown from '../../Assets/obj/icon/angleDown.svg'

const About = () => {

    const [prof] = useState("مبینا حسین پور");

    return (
        <Fragment>
            <div className={AboutCss.wrapped}>
                <h1 className={AboutCss.about}>درباره استاد</h1>
                <div className={AboutCss.details}>
                    <img className={AboutCss.prof} src={pic2}/>
                    <p className={AboutCss.name}>{prof}</p>
                    <img className={AboutCss.angle} src={angleDown}/>
                </div>
                
            </div>
        </Fragment>
    )
}

export default About
