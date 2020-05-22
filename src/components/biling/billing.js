import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import './billing.css';
import Switch from "react-switch";

class Billing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStore: false,
      isModalOpen: false,
      showModal: false,
      checked: false,
      general:true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleChangeStyle() {
    this.setState(state => ({
      showStore: !state.showStore
    }));
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
      <div className="App">
        <aside className="task">
          <img className="logo" src={require("../images/logo.png")} />
          <Link to='/'><p className="middle"><img src={require("../images/Grey/Group 409.png")} />Task</p></Link>
          <Link to='/proxies'><p className="middle"><img src={require("../images/Grey/Group 410.png")} />Proxies</p></Link>
          <Link to='/billing'><p className="middle" style={{ color: "white" }}><img src={require("../images/billing.png")} />Billing</p></Link>
          <Link to='/accounts'><p className="middle"><img src={require("../images/Grey/Group 412.png")} />Accounts</p></Link>
          <Link to='/rates'><p className="middle"><img src={require("../images/Grey/Group 413.png")} />Rates</p></Link>
          <Link to='/settings'><p className="middle"><img src={require("../images/Grey/Group 414.png")} />Settings</p></Link>
        </aside>



        <main>
          <div className='content'>
            <div className="search-section">
              <input className="search" type="text" placeholder="Search" style={{ display: this.state.showStore ? 'block' : 'none' }} />
              <img className="search-icon" src={require("../images/search.png")} onClick={this.handleChangeStyle} />
            </div>
            <div className="user">
              <div className="close-icon">
                <img className="minimize" src={require("../images/minimize.png")} />
                <img src={require("../images/close.png")} />
              </div>
              <p>
                <img className="notification" src={require("../images/notification.png")} />
                <span>Jessica Blume</span>
                <img className="user-picture" src={require("../images/user.png")} />
              </p>
            </div>
          </div>


          <div className='rubric'>Billing</div>
          <Test isOpen={this.state.isModalOpen} onClose={this.closeModal} />
          <div className="menu">
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Card Holder</li>
              <li>Card Number</li>
              <li>One Check</li>
              <li>Actions</li>
            </ul>


          </div>

          <div className='billing-element' >
            <div className='billing-icon'>
              <img src={require("../images/folders.png")} />
            </div>
            <div className="information">
              <ul className="info">
                <li>Name</li>
                <li>E-Mail@gmail.com</li>
                <li>Card Holder</li>
                <li>Ending in 1112</li>
              </ul>
            </div>
            <div className="switch">
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                uncheckedIcon={false}
                checkedIcon={false}
                height={50}
                width={96}
                onHandleColor='#16C8E4'
                onColor="#182D43"
                offColor="#182D43" />
            </div>
            <div className="action-btn">
              <button className="action-settings-btn"><img src={require('../images/settings-ligth.png')} /></button>
              <button><img src={require("../images/play.svg")}></img></button>
              <button className="action-close-btn"><img src={require('../images/close-ligth.png')} /></button>

            </div>



          </div>

          <div className='billing-btn-icon'>
            <div className="btn">
              <button onClick={this.openModal}><img src={require("../images/plus.png")} /> <span className="mobile-view" >Create Profile</span></button>
              <button><img src={require('../images/trash.png')} /><span className="mobile-view" >Clear All Profile</span></button>
            </div>

          </div>

        </main>

      </div>


    )
  }

};
export default Billing

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      checked: false,
      checkedone: false,
      checkedtwo: false

    }
    this.handleChangeTwo = this.handleChangeTwo.bind(this)
    this.handleChangeOne = this.handleChangeOne.bind(this)
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }


  incrementCount() {
    this.setState(state => ({ count: state.count + 1 }));

  }

  decrementCount() {
    this.setState(state => ({ count: state.count - 1 }))
  }

  handleChangeOne(checkedone) {
    this.setState({ checkedone })
  };

  handleChange(checked) {
    this.setState({ checked });
  }

  handleChangeTwo(checkedtwo) {
    this.setState({ checkedtwo })
  }
  render() {
    const { isOpen, onClose, count } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open-billing' : 'modal'}>
        <div className='billing-payment'>
          <button onClick=''>General</button>
          <button onClick=''>Delivery</button>
          <button onClick='' style={{ border: 'none' }}>Payment</button>
        </div>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />
        <div style={{ display: 'none' }}>
          <input className='create-general' placeholder='General' disabled="true" />
          <input className="profile-name" placeholder='Profile Name' />
          <input className="email-address" placeholder='Email Address' />
          <input className="phone-number" placeholder='Phone Number' />
          <div className='billing-switch' style={{ display: "flex" }}>
            <div className="switch genral-switch" style={{ marginleft: '150px' }}>
              <p>One Checkout Per Product</p>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                uncheckedIcon={false}
                checkedIcon={false}
                height={50}
                width={96}
                onHandleColor='#16C8E4'
                offHandleColor='#201D37'
                onColor="#1A3047"
                offColor="#1A3047" />
            </div>
            <div className="switch genral-switch">
              <p>Use For Quick Task</p>
              <Switch
                onChange={this.handleChangeOne}
                checked={this.state.checkedone}
                uncheckedIcon={false}
                checkedIcon={false}
                height={50}
                width={96}
                onHandleColor='#16C8E4'
                offHandleColor='#201D37'
                onColor="#182D43"
                offColor="#182D43" />
            </div>
          </div>
          <div className='billing-switch' style={{ display: "flex" }}>
            <div className="switch genral-switch" style={{ marginleft: '150px' }}>
              <p>Separate Billing & Delivery</p>
              <Switch
                onChange={this.handleChangeTwo}
                checked={this.state.checkedtwo}
                uncheckedIcon={false}
                checkedIcon={false}
                height={50}
                width={96}
                onHandleColor='#16C8E4'
                offHandleColor='#201D37'
                onColor="#1A3047"
                offColor="#1A3047" />
            </div>
            <div className="switch">
              <p></p>
              <button className="save-btn">Save</button>
            </div>

          </div>
        </div>

        <div style={{ display: 'none' }}>
          <input className='create-general' placeholder='Delivery' disabled="true" />
          <input className="first-name" placeholder='First Name' />
          <input className="last-name" placeholder='Last Name' />
          <input className="address-one" placeholder='Address 1' />
          <input className="address-two" placeholder='Address 2' />
          <input className="city" placeholder='City' />
          <input className="zip-code" placeholder='Zip Code' />
          <select className="country select-decoration" placeholder='Country'>
            <option>United States</option>
            <option>Albania</option>
            <option>andorra</option>
            <option>Angola</option>
            <option>Argentina</option>
            <option>Armenia</option>
            <option>Australia</option>
            <option>Belarus</option>
          </select>
          <button className="delivery-save-btn">Save</button>


        </div>

        <div>
          <input className='create-general' placeholder='Payment' disabled="true" />
          <input className="card-number" placeholder='Card Number' />
          <div  className='card-payment' style={{ display: 'flex' }}>

          <select className="month select-decoration" placeholder='Country'>
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

            <select className="year select-decoration" placeholder='Country'>
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
            <input type='password' placeholder='CVV' className='cvv' />
          </div>
          <button className=" payment-save save-btn">Save</button>
        </div>





      </div>
    );
  }
}




