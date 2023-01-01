import React from 'react';
import Logo from '../../logo.svg'
import Avatar from '../../logo.svg'

export default class Header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <MainHeader/>
        )
    }
}

function MainHeader() {
    return (
        <div id="container" className="masthead container px-14 py-6 bg-white">
            <div className="flex flex-row justify-between columns-3 items-center">
                <div id="start" className="masthead basis-2/12 lg:basis-2/12 flex flex-row items-center">
                    <div id="menu-icon">
                        <button id="button" className="icon-button" aria-label="Back"><i className={'fa fa-bars'}></i>
                        </button>
                    </div>
                    <div id="logo" className={'flex flex-row items-center'}>
                        <a className="top-header-logo" id="logo" aria-label="" href="/" title="YouTube Home">
                            <img src={Logo} alt="YouTube" className={'lg:h-16 md:h-12 sm:h-14'}/>
                        </a>
                        <span id="country-code" className="topbar-logo-renderer">BD</span>
                    </div>
                </div>
                <div id="center" className="masthead basis-8/12 lg:basis-2/12 flex flex-row items-center justify-center">
                    <div id="search" className={'flex flex-row items-center'}>
                        <form id="search-form" action="/results" className="searchbox">
                            <div id="container" className="searchbox">
                                <span className="search-icon"><i className={'fa fa-search'}></i> </span>
                                <div id="search-input" className="searchbox-spt"><input id="search" type="search"
                                                                                        name='s'/></div>
                                <div id="search-clear-button" className="searchbox" hidden="">
                                    <button id="close-button"><i className={'fa fa-times'}></i></button>
                                </div>
                            </div>
                            <div id="search-container" className="searchbox-spt " slot="search-container"></div>
                        </form>
                        <button id="search-icon-legacy" className="searchbox" aria-label="Search">
                            <i className={'fa fa-search'}></i>
                            <span id="tooltip" className="tp-paper-tooltip ">Search</span>
                        </button>
                    </div>
                    <div id="voice-search-button">
                        <button className="">
                            <i className={'fa fa-microphone-alt'}></i>
                        </button>
                        <div className={'search-voice-text'}>
                            <span id="tooltip" className="tp-paper-tooltip hidden">Search with your voice</span>
                        </div>
                    </div>
                </div>
                <div id="end" className="masthead basis-2/12 lg:basis-2/12 flex flex-row items-center">
                    <div id="button" className="topbar-menu-button-renderer flex flex-row items-center">
                        <div className="simple-endpoint topbar-menu-button-renderer" tabIndex="-1">
                            <div id="button" className="topbar-menu-button-renderer style-default">
                                <button id="button" className="icon-button" aria-label="Create">
                                    <i className={'fa fa-video-plug'}></i>
                                </button>
                            </div>
                            <div className="topbar-menu-button-renderer">
                                <div id="tooltip" className="tp-paper-tooltip hidden">Create</div>
                            </div>
                        </div>
                    </div>
                    <div id="icon" className="notification-topbar-button-renderer">
                        <div id="button" className="icon-button" aria-label="Notifications">
                            <div className="notification-topbar-button-renderer">
                                <div
                                    className="spec-icon-badge-shape spec-icon-badge-shape--type-notification  ">
                                    <div className="spec-icon-badge-shape__icon">
                                        <i className={'fa fa-bell'}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notification-topbar-button-renderer">
                            <div id="tooltip" className="tp-paper-tooltip hidden">Notifications</div>
                        </div>
                    </div>
                    <div className="topbar-avatar">
                        <button id="avatar-btn" aria-haspopup="true" className="topbar-menu-button-renderer"
                                aria-label="Account profile photo that opens list of alternate accounts">
                            <div className="topbar-menu-button-renderer no-transition">
                                <img id="img" draggable="false" className="img-shadow" alt="Avatar" height="32"
                                     width="32" src={Avatar}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}