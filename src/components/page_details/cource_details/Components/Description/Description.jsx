import React , { Fragment } from 'react'
import DescriptionCss from './Description.module.css'
import Illus from './Divide/Illus/Illus'
import Text from './Divide/Text/Text'

const Description = props => {
    return (
        <Fragment>
            <div className={DescriptionCss.wrapper}>
                <Illus imageUrl={props.imageUrl}/>
                <Text info={props.info}/>
            </div>
        </Fragment>
    )
}

export default Description
