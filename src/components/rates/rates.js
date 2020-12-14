import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import './rates.css'
import Home from '../home/home';
import Header from '../header/header';

class Rates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showStore: false,
            isModalOpen: false,
            showModal: false,
        }
        this.handleChangeStyle = this.handleChangeStyle.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }



    handleChangeStyle() {
        this.setState(state => ({ showStore: !state.showStore }));
    }

    openModal() {
        this.setState(state => ({ isModalOpen: !state.isModalOpen }));
        this.setState(state => ({
            showModal: !state.showModal
        }));
    }

    closeModal() {
        this.setState({ isModalOpen: false })
        this.setState(state => ({
            showModal: !state.showModal
        }));
    }

    render() {
        return (

            <div className="app" >

                <aside className="task" >
                    <img className="logo" src={require("../images/logo.png")} />
                    <Link to='/' > < p className="middle" > < img src={require("../images/Grey/Group 409.png")} />Task</p > </Link>
                    <Link to='/proxies' > < p className="middle" > < img src={require("../images/Grey/Group 410.png")} />Proxies</p > </Link>
                    <Link to='/billing' > < p className="middle" > < img src={require("../images/Grey/Group 411.png")} />Billing</p > </Link>
                    <Link to='/accounts' > < p className="middle" > < img src={require("../images/Grey/Group 412.png")} />Accounts</p > </Link>
                    <Link to='/rates' > < p className="middle" style={{ color: "white" }} > < img src={require("../images/rates.png")} />Rates</p > </Link>
                    <Link to='/settings' > < p className="middle" > < img src={require("../images/Grey/Group 414.png")} />Settings</p > </Link>
                </aside >



                <main>
                    <Header />



                    < div className='rubric' > Rates </div>
                    {/* <RatesModal isOpen={this.state.isModalOpen} onClose={this.closeModal} /> */}
                    <div className="menu" >
                        <ul className="accounts" >
                            <li > Store </li>
                            <li > Name </li>
                            <li > Location </li>
                        </ul >
                        <p style={{ display: this.state.showModal ? 'none' : 'block' }} > Add Some Rates To Get Started </p>

                    </div>
                    <div className='accounts-btn-icon' >
                        <div className="btn" >
                            <button onClick={this.openModal} > < img src={require("../images/plus.png")} />
                                <span className="mobile-view" >Add Rates</span > </button>
                            <button > < img src={require('../images/trash.png')} /><span className="mobile-view" >Clear All Rates</span > </button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};


export default Rates

class RatesModal extends React.Component {
    constructor(props) {
        super(props);



    }

    render() {
        const { isOpen, onClose, count } = this.props;

        return (<div className={isOpen ? 'modal modal--is-open-account' : 'modal'} >
            <div className="close-icon" >
                <img src={require("../images/close.png")} onClick={onClose} />
            </div > < br /> < br />
            <input className='account-create' placeholder='Add Shipping Rates' />
            <div className="search-section" >
                <input className="rates-search" type="text" placeholder="Search" />
            </div>
            <select className=" rates-store-select-decoration">
                <option selected disabled>Store</option>
                <option>Store</option>
                <option>Store</option>
            </select>
            <select className="rates-profile-select-decoration ">
                <option selected disabled>Profile</option>
                <option>Profile</option>
                <option>Profile</option>
            </select>
            <input className='shipping-id' placeholder='Enter Shipping Rale ID' />
            <button className="add-proxies" > < span className="mobile-view" > Add </span> </button>
        </div >
        );
    }
}