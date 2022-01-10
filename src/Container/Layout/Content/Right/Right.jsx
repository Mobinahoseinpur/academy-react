import React, { Fragment } from 'react'
import '../../../../Assets/bootstrap/bootstrap.min.css'
import RightCss from './Right.module.css'
import Title from '../../../../Components/Title/Title'
import Description from '../../../../Components/Description/Description'
import Video from '../../../../Components/Video/Video'
import Opinion from '../../../../Components/Opinion/Opinion'

const Right = () => {
    return (
        <Fragment>
            <div>

                <Title />
                <Description/>
                <Video/>
                <Opinion/>
                <Title />
                <Description />

            </div>
        </Fragment>
    )
}

export default Right
