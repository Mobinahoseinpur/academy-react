import React , {Fragment} from 'react'
import TextCss from './Text.module.css'
import Title from '../../../Title/Title'

const Text = (props) => {
    return (
        <Fragment>
            <div className={TextCss.holder}>
                <Title/>
                <p className={TextCss.summ}>
                {props.info}
                </p>

            </div>
        </Fragment>
    )
}

export default Text
