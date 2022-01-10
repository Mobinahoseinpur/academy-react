import React , { Fragment } from 'react'
import DescriptionCss from './Description.module.css'
import Illus from './Divide/Illus/Illus'
import Text from './Divide/Text/Text'

const Description = () => {
    return (
        <Fragment>
            <div className={DescriptionCss.wrapper}>
                <Illus/>
                <Text/>
            </div>
        </Fragment>
    )
}

export default Description
