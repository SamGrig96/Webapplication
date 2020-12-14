import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import './settings.css'
import Switch from "react-switch";
import Hedaer from '../header/header';

class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedDesktop: false,
            checkedSound: false,
            checkedCaptcha: false,
            countmonitor: 3600,
            countretry: 3600,
            counttimeout: 10,
        }
        this.handleChangeDesktop = this.handleChangeDesktop.bind(this);
        this.handleChangeSounds = this.handleChangeSounds.bind(this);
        this.handleChangeCaptcha = this.handleChangeCaptcha.bind(this);
        this.incrementCountMonitor = this.incrementCountMonitor.bind(this);
        this.decrementCountMonitor = this.decrementCountMonitor.bind(this);
        this.incrementCountRetry = this.incrementCountRetry.bind(this);
        this.decrementCountRetry = this.decrementCountRetry.bind(this);
        this.incrementCountTime = this.incrementCountTime.bind(this);
        this.decrementCountTime = this.decrementCountTime.bind(this);
    }

    handleChangeDesktop(checkedDesktop) {
        this.setState({ checkedDesktop });
    }


    handleChangeSounds(checkedSound) {
        this.setState({ checkedSound });
    }


    handleChangeCaptcha(checkedCaptcha) {
        this.setState({ checkedCaptcha });
    }

    incrementCountMonitor() {
        this.setState(state => ({ countmonitor: state.countmonitor + 1 }));

    }

    decrementCountMonitor() {
        this.setState(state => ({ countmonitor: state.countmonitor - 1 }))
    }

    incrementCountRetry() {
        this.setState(state => ({ countretry: state.countretry + 1 }));

    }

    decrementCountRetry() {
        this.setState(state => ({ countretry: state.countretry - 1 }))
    }

    incrementCountTime() {
        this.setState(state => ({ counttimeout: state.counttimeout + 1 }));

    }

    decrementCountTime() {
        this.setState(state => ({ counttimeout: state.counttimeout - 1 }))
    }

    render() {
        return (
            <div className="app">
                <aside className="task">
                    <img className="logo" src={require("../images/logo.png")} />
                    <Link to='/'><p className="middle" ><img src={require("../images/Grey/Group 409.png")} />Task</p></Link>
                    <Link to='/proxies'><p className="middle"><img src={require("../images/Grey/Group 410.png")} />Proxies</p></Link>
                    <Link to='/billing'><p className="middle"><img src={require("../images/Grey/Group 411.png")} />Billing</p></Link>
                    <Link to='/accounts'><p className="middle"><img src={require("../images/Grey/Group 412.png")} />Accounts</p></Link>
                    <Link to='/rates'><p className="middle"><img src={require("../images/Grey/Group 413.png")} />Rates</p></Link>
                    <Link to='/settings'><p className="middle" style={{ color: "white" }}><img src={require("../images/settings.png")} />Setting</p></Link>
                </aside>



                <main>
                   <Hedaer />


                    <div className='settings-rubric'>Settings</div>
                    <div className='version-section'>
                        <div className='version'>
                            <span>Last Version 1.0.0.0 </span>
                            <button className='update-btn'>Update</button>
                        </div>
                        <div className='log-out'>
                            <button>Log Out</button>
                        </div>
                    </div>
                    <div className='user-info-section'>
                        <div> <img src={require('../images/client.png')} /></div>
                        <div className='contact-info'>
                            <h1>Contact Information</h1> <br />
                            <p>Name: &nbsp;&nbsp;   Jessica Blume</p>
                            <p>Age: &nbsp;&nbsp; &nbsp;&nbsp; 25</p>
                            <p>Gender: &nbsp;Female</p>
                        </div>


                    </div>
                    <div className='notofication-section'>
                        <h1>Notofications</h1>

                        <div className='notofication'>
                            <span>Desktop</span>
                            <Switch
                                onChange={this.handleChangeDesktop}
                                checked={this.state.checkedDesktop}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={55}
                                width={96}
                                onHandleColor='#16C8E4'
                                onColor="#182D43"
                                offColor="#182D43" />
                            <span>Sounds</span>
                            <Switch
                                onChange={this.handleChangeSounds}
                                checked={this.state.checkedSound}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={55}
                                width={96}
                                onHandleColor='#16C8E4'
                                onColor="#182D43"
                                offColor="#182D43" />
                            <span>Captcha</span>
                            <Switch
                                onChange={this.handleChangeCaptcha}
                                checked={this.state.checkedCaptcha}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={55}
                                width={96}
                                onHandleColor='#16C8E4'
                                onColor="#182D43"
                                offColor="#182D43" />
                        </div>


                    </div>
                    <div className='btn-icon-settings'>
                        <div className="final-count">
                            <p>Monitor</p>
                            <div className='notif-count'>
                                <div className="notif-total-count">{this.state.countmonitor}</div>
                                <button className="count-plus" onClick={this.incrementCountMonitor}>+</button>

                                <button className="count-minus" onClick={this.decrementCountMonitor}>-</button>
                            </div>
                        </div>
                        <div className="final-count">
                            <p>Retry</p>
                            <div className='notif-count'>
                                <div className="notif-total-count">{this.state.countretry}</div>
                                <button className="count-plus" onClick={this.incrementCountRetry}>+</button>

                                <button className="count-minus" onClick={this.decrementCountRetry}>-</button>
                            </div>
                        </div>
                        <div className="final-count">
                            <p>Timeout</p>

                            <div className='notif-count'>
                                <div className="notif-total-count">{this.state.counttimeout}</div>
                                <button className="count-plus" onClick={this.incrementCountTime}>+</button>

                                <button className="count-minus" onClick={this.decrementCountTime}>-</button>
                            </div>
                        </div>
                    </div>

                </main>

            </div>


        )
    }

};
export default Setting

