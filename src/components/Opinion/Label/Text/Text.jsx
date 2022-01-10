import React , {Fragment} from 'react'
import TextCss from './Text.module.css'


const Text = (props) => {
    return (
        <div className={TextCss.text}>{props.text}</div>
    )
}

export default Text
