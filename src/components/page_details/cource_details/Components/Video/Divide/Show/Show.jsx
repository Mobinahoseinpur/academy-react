import React , {Fragment} from 'react'
import ShowCss from './Show.module.css'
import Title from './Title/Title'
import work from '../../../../Assets/obj/img/img secoand/work.jpg'
import play from '../../../../Assets/obj/icon/play.svg'

const Show = () => {
    return (
        <Fragment>
            <div className={ShowCss.holder}>
                <Title className={ShowCss.title}/>
                <div className={ShowCss.video}>
					<img src={work}/>
					<div className={ShowCss.glass}>
						<div className={ShowCss.play}>
							<img className={ShowCss.svg} src={play}/>

						</div>
					</div>
				</div>
            </div>
        </Fragment>
    )
}

export default Show
