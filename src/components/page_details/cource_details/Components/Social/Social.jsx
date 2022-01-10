import React , {Fragment} from 'react'
import SocialCss from './Social.module.css'
import instagram from '../../Assets/obj/icon/instagram.svg'
import telegramAlt from '../../Assets/obj/icon/telegramAlt.svg'
import copy from '../../Assets/obj/icon/copy.svg'


const Social = () => {
    return (
        <Fragment>
            <div className={SocialCss.wrapped}>
                <div className={SocialCss.holder}>
                    <img className={SocialCss.app} src={instagram}/>
                    <img className={SocialCss.app} src={telegramAlt}/>
                    <img className={SocialCss.app} src={copy}/>
                    <p className={SocialCss.txt}> ارتباط با ما :</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Social
