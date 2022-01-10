import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RightCss from './Right.module.css'
import Title from '../../Components/Title/Title'
import Description from '../../Components/Description/Description'
import Video from '../../Components/Video/Video'
import Opinion from '../../Components/Opinion/Opinion'

const Right = props => {
    return (
        <Fragment>
            <div>

                <Title title={props.title} />
                <Description imageUrl={props.imageUrl} info={props.info}/>
                <Video/>
                <Opinion/>

            </div>
        </Fragment>
    )
}

export default Right
