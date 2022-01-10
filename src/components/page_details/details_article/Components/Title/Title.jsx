import React , { Component, useState}from 'react'
import TitleCss from './Title.module.css'

const Title = () => {
    const [title] = useState("دوره پیشرفته هک و امنیت");


    return (
        <h1 className={TitleCss.title}>{title}</h1>
    )
}
export default Title
