import React , { Component, useState}from 'react'
import TitleCss from './Title.module.css'


const Title = (props) => {

    return (
        <h1 className={TitleCss.title}>{props.title}</h1>
    )
}
export default Title
