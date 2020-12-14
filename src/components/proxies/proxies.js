import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import './proxies.css'
import Hedaer from '../header/header';

class Proxies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStore: false,
      isModalOpen: false,
      showModal: false,
      isModalOpenBuy: false,
      showModalBuy: false,
      isOpenCreateProxies: false,
      showCreateProxies: false,

    }
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModalBuyProxies = this.openModalBuyProxies.bind(this);
    this.closeModalBuyProxies = this.closeModalBuyProxies.bind(this);
    this.isOpenCreateProxies = this.isOpenCreateProxies.bind(this)
    this.closeModalCreateProxies = this.closeModalCreateProxies.bind(this)
  }



  handleChangeStyle() {
    this.setState(state => ({showStore: !state.showStore}));
  }

  openModal() {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    this.setState(state => ({ showModal: !state.showModal }));
    this.setState({ showModalBuy: false })
    this.setState({ isModalOpenBuy: false })
    this.setState({ isOpenCreateProxies: false })
    this.setState({ showCreateProxies: false })
  }

  closeModal() {
    this.setState({ showModal: false })
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  }

  openModalBuyProxies() {
    this.setState(state => ({ isModalOpenBuy: !state.isModalOpenBuy }))
    this.setState(state => ({ showModalBuy: !state.showModalBuy }));
    this.setState({ showModal: false })
    this.setState({ isModalOpen: false });
    this.setState({ isOpenCreateProxies: false })
    this.setState({ showCreateProxies: false })
  }

  closeModalBuyProxies() {
    this.setState({ showModalBuy: false })
    this.setState(state => ({ isModalOpenBuy: !state.isModalOpenBuy }));

  }

  isOpenCreateProxies() {
    this.setState(state => ({ isOpenCreateProxies: !state.ModalCreateProxies }))
    this.setState(state => ({ showCreateProxies: !state.showCreateProxies }))
    this.setState({ showModal: false })
    this.setState({ isModalOpen: false });
    this.setState({ showModalBuy: false })
    this.setState({ isModalOpenBuy: false })


  }

  closeModalCreateProxies() {
    this.setState({ showCreateProxies: false })
    this.setState(state => ({ isOpenCreateProxies: !state.isOpenCreateProxies }))
  }
  render() {
    return (
      <div className="app">
        <aside className="task">
          <img className="logo" src={require("../images/logo.png")} />
          <Link to='/'><p className="middle" ><img src={require("../images/Grey/Group 409.png")} />Task</p></Link>
          <Link to='/proxies'><p style={{ color: "white" }} className="middle"><img src={require("../images/proxies.png")} />Proxies</p></Link>
          <Link to='/billing'><p className="middle"><img src={require("../images/Grey/Group 411.png")} />Billing</p></Link>
          <Link to='/accounts'><p className="middle"><img src={require("../images/Grey/Group 412.png")} />Accounts</p></Link>
          <Link to='/rates'><p className="middle"><img src={require("../images/Grey/Group 413.png")} />Rates</p></Link>
          <Link to='/settings'><p className="middle"><img src={require("../images/Grey/Group 414.png")} />Settings</p></Link>
        </aside>



        <main>
          <Hedaer />



          <div className='proxies'>
            <h1>Proxies</h1>
            <div className='proxi-btn'>
              <select className="shopify shopify-decoration">
                <option>Shopify</option>
                <option>Supreme</option>
                <option>Footlocker EU</option>
                <option>FinishLine</option>
                <option>Off---White</option>
                <option>Hibbett</option>
                <option>Kicks Store</option>
                <option>Mesh</option>
              </select>
              <button className="proxies-btn"><img src={require('../images/settings-ligth.png')} /></button>
              <button className="proxiclose-btn"><img src={require('../images/close-ligth.png')} /></button>
              <span className='plus' onClick={this.isOpenCreateProxies}>+</span>
              <select className="proxilist list-decoration">
                <option>No Proxy list</option>
                <option>Select Account</option>
                <option>Select Account</option>
              </select>
            </div>

          </div>
          {/* <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
          <ModalProxiesBuy isOpen={this.state.isModalOpenBuy} onClose={this.closeModalBuyProxies} />
          <ModalCreateProxies isOpen={this.state.isOpenCreateProxies} onClose={this.closeModalCreateProxies} /> */}
          <div className="menu">
            <ul>
              <li>IP</li>
              <li>Port</li>
              <li>Username</li>
              <li>Password</li>
              <li>Store</li>
              <li>Status</li>
              <li>Actions</li>
              <li>Actions</li>
            </ul>
            <p style={{ display: this.state.showModal ? 'none' : 'block' }}  >Create a Proxy List To Get Started</p>

          </div>
          <div className='proxi-btn-icon'>
            <div className="btn">
              <button onClick={this.openModal}><img src={require("../images/plus.png")} /> <span className="mobile-view" >Create Proxies</span></button>
              <button><img src={require('../images/trash.png')} /><span className="mobile-view" >Clear All Proxies</span></button>
              <button><img src={require('../images/test.png')} /><span className="mobile-view" >Test All Proxies</span></button>
              <button onClick={this.openModalBuyProxies}><img src={require("../images/buy.png")} /><span className="mobile-view" >Buy Proxies</span></button>


            </div>

          </div>

        </main>

      </div>


    )
  }

};
export default Proxies

class Modal extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    const { isOpen, onClose, } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open-proxies' : 'modal'}>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />
        <div className='create-proxies'>Add Proxies</div>

        <input className='import-proxies' placeholder="Import Proxies From File" ></input>
        <textarea className='proxies-text' placeholder='Text..'></textarea>

        <button className="add-proxies" > <span className="mobile-view">Add</span> <img src={require("../images/plus.png")} /></button>
      </div>
    );
  }
}


class ModalProxiesBuy extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { isOpen, onClose, count } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open-proxies' : 'modal'}>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />
        <div className='proxies-logo'>
          <img src={require('../images/logo.png')} />
        </div>

        <div className='proxies-buy'>Hype Velocity</div>

        <select className="buy-country-select-decoration" placeholder='Country' >

          <option>10 Ashburn 24h Proxies</option>
          <option>10 Ashburn 24h Proxies</option>
          <option>10 Ashburn 24h Proxies</option>
          <option>10 Ashburn 24h Proxies</option>
          <option>10 Ashburn 24h Proxies</option>
          <option>10 Ashburn 24h Proxies</option>
          <option>10 Ashburn 24h Proxies</option>

        </select>

        <select className=" buy-profile-select-decoration " placeholder='Country'>
          <option>Select Profile</option>
          <option>Select Profile</option>
          <option>Select Profile</option>
          <option>Select Profile</option>
          <option>Select Profile</option>
          <option>Select Profile</option>
          <option>Select Profile</option>

        </select>
        <input className="buy-email" placeholder='Email Address' />
        <input className="buy-card" placeholder='Card Number' />
        <div className='card-payment' style={{ display: 'flex' }}>

          <select className="month select-decoration" >
            <option>MM</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <select className="buy-year select-decoration">
            <option>YY</option>
            <option>25</option>
            <option>24</option>
            <option>23</option>
            <option>22</option>
            <option>21</option>
            <option>20</option>
            <option>19</option>
            <option>18</option>
            <option>17</option>
            <option>16</option>
            <option>15</option>
          </select>
          <input type='password' placeholder='CVV' className='buy-cvv' />
        </div>

        <div className='pay'>
          <select className="change select-decoration">

            <option>USD</option>
            <option>EUR</option>

          </select>
          <span className='pay-text'>Pay $10</span>
          <button className="buy-btn" > <span className="mobile-view">Buy</span></button>
        </div>

      </div>
    );
  }
}

class ModalCreateProxies extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { isOpen, onClose, count } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open-proxies' : 'modal'}>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />


        <div className='proxies-buy'>Create New Proxy List</div>
        <input className='proxi-name' placeholder='Proxy Name' />
        <div className='list-new'>
          <button className="name-btn" > <span className="mobile-view">Cancel</span></button>
          <button className="name-btn" > <span className="mobile-view">Create</span></button>
        </div>
      </div>
    );
  }
}

