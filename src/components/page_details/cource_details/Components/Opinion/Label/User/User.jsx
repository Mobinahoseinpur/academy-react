import React, { Fragment } from 'react'
import UserCss from './User.module.css'



const User = (props) => {
    return (
        <Fragment>
            <div className={UserCss.holder}>
                <div className={UserCss.user}></div>
                <div className={UserCss.name}>{props.name}</div>
                <div className={UserCss.date}>{props.date}</div>
            </div>
        </Fragment>
    )
}

export default User
