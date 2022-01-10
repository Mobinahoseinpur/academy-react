import React , {Fragment} from 'react'
import TextCss from './Text.module.css'
import Title from '../../../Title/Title'

const Text = () => {
    return (
        <Fragment>
            <div className={TextCss.holder}>
                <Title/>
                <p className={TextCss.summ}>
                پیش نیاز ها هستتند و اگر این پپیش نیاز هارو رعایت نکنید ممکنه در مسیر آموزشی تون شکست بخورید !
						بپرسید شمارو با برنامه نویسی ,شبکه , لینوکس, هدایت می کنه ! و تاکید می کنه که این هاباید بگذرونن واین حوزه چه پیش نیاز هایی دارن !شما معمولا از هر متخصص تست نفودذ این سوال رو بپرسین بسیاری به حوزه هک و امنیت علاقه مند هست.
                </p>
                <p className={TextCss.summ}>
                دوره بحث شبکه و لینوکس آشنایی با برنامه نویسی مطابق گفتهاساتید بزرگ این حوزه مطرح کردم ! و اولین دوره آموزشی رایگانم رو با موضوع (چگونه هکر شویم) نقشه راه هک و امنیت رو شروع کردم و در اون از اونجایی شروع شد کع بنده تصمیم گرفتم به عنوان یک مدرس در ئب سایت تاپ لرن فعالیت داشته باشم
                </p>
                <p className={TextCss.summ}>
                دوره آموزشی این نقشه راه مقدماتی هست ! در این دوره آموزشی با چند چیز به خوبی آشنا میشید تاپ لرن قرار شد روی یک رود مپ آموزشی خوب و در ین حال سادهبرای افراد مبتدی  کار کنیم و این اولین 
						<p className={TextCss.summ}>1-برنامه نویسی با دیدگاه یک هکر</p>
						<p className={TextCss.summ}>2- شبکه با دیدگاه یک هکر</p> 
						<p className={TextCss.summ}>3-لینوکس با دیدگاه یک هکر</p>
                </p>
                <div className={TextCss.link}>
						<p>لینک نرم افزار مورد نیاز :</p>
						<a href="#" className={TextCss.apps}>vs code</a>
						<a href="#" className={TextCss.apps}>sql server</a>
					</div>
            </div>
        </Fragment>
    )
}

export default Text
