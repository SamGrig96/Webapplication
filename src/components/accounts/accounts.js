import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import './accounts.css'
import Hedaer from '../header/header';

class Accounts extends React.Component {
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
    this.setState(state => ({ showStore: !state.showStore}));
  }

  openModal() {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    this.setState(state => ({showModal: !state.showModal}));
  }

  closeModal() {
    this.setState({ isModalOpen: false })
    this.setState(state => ({showModal: !state.showModal}));
  }

  render() {
    return (
      <div className="app">
        <aside className="task">
          <img className="logo" src={require("../images/logo.png")} />
          <Link to='/'><p className="middle" ><img src={require("../images/Grey/Group 409.png")} />Task</p></Link>
          <Link to='/proxies'><p className="middle"><img src={require("../images/Grey/Group 410.png")} />Proxies</p></Link>
          <Link to='/billing'><p className="middle"><img src={require("../images/Grey/Group 411.png")} />Billing</p></Link>
          <Link to='/accounts'><p className="middle" style={{ color: "white" }}><img src={require("../images/account.png")} />Accounts</p></Link>
          <Link to='/rates'><p className="middle"><img src={require("../images/Grey/Group 413.png")} />Rates</p></Link>
          <Link to='/settings'><p className="middle"><img src={require("../images/Grey/Group 414.png")} />Settings</p></Link>
        </aside>



        <main>
          <Hedaer />

          <div className='rubric'>Accounts</div>
          {/* <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} /> */}
          <div className="menu">
            <ul className="accounts">
              <li>Store</li>
              <li>Name</li>
              <li>Location</li>
            </ul>
            <p style={{ display: this.state.showModal ? 'none' : 'block' }}  >Add Some accounts to get started</p>

          </div>
          <div className='accounts-btn-icon'>
            <div className="btn">
              <button onClick={this.openModal}><img src={require("../images/plus.png")} /> <span className="mobile-view" >Add Accounts</span></button>
              <button><img src={require('../images/trash.png')} /><span className="mobile-view" >Clear All Profile</span></button>


            </div>

          </div>

        </main>

      </div>


    )
  }

};
export default Accounts

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);


//   }

//   render() {
//     const { isOpen, onClose, } = this.props;

//     return (
//       <div className={isOpen ? 'modal modal--is-open-account' : 'modal'}>
//         <div className="close-icon">
//           <img src={require("../images/close.png")} onClick={onClose} />
//         </div><br /><br />
//         <div className='account-create'>Add Account</div>

//         <select className="store account-select-decoration">
//           <option>Select Store</option>
//           <option>12amrun</option>
//           <option>Above The Clouds Store</option>
//           <option>Addict Miami</option>
//           <option>Alife NYC</option>
//           <option>Alumni</option>
//           <option>A-ma-maniere</option>
//           <option>Amongst Few</option>
//           <option>Anti Social Club</option>
//         </select>
//         <textarea className='proxies-text' placeholder='Store'></textarea>
//         <button className="add-proxies" > <span className="mobile-view">Add</span> <img src={require("../images/plus.png")} /></button>
//       </div>
//     );
//   }
// }




