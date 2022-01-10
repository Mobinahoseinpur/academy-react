import React , {Fragment} from 'react'
import User from './User/User'
import Text from './Text/Text'

const Label = () => {
    return (
        <div>
            <User
                 name="مبینا حسین پور"
                 date="سه هفته پیش"
                 />
                 <Text
                 text="هستن از من می پرسن که چه دوره هایی رو باید بگذرونن و این حوزهچ چه پیش نیاز هایی لازم داره ؟ بسیاری از افراد به این حوزه علاقه مند هستند ."
                 />
        </div>
    )
}

export default Label
