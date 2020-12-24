import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
            <img className="banner__bgImage" src="/images/Background.jpg" alt=""/>
            <img className="banner__item" src="/images/Kyo_Flame.png" alt=""/>
            <div className="banner__link ">
                <img src="/images/Instinct.png" alt=""/>
                <img src="/images/Mukai.png" alt=""/>
                <img src="/images/Magaki.png" alt=""/>
                <img src="/images/Ash.png" alt=""/>
            </div>
        </div>
        )
    }
}

