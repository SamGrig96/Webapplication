import React from 'react';

import '../../App.css';
import '../header/header.css'

// import './rates.css'

class Hedaer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStore: false,
      isModalNotifOpen: false,
      showNotifModal: false

    }
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.openNotifModal = this.openNotifModal.bind(this)
    this.closeNotifModal = this.closeNotifModal.bind(this)
  }

  handleChangeStyle() {
    this.setState(state => ({ showStore: !state.showStore }));
  }

  openNotifModal() {
    this.setState(state => ({ isModalNotifOpen: !state.isModalNotifOpen }));
    this.setState(state => ({ showNotifModal: !state.showNotifModal }));
  }

  closeNotifModal() {
    this.setState({ isModalNotifOpen: false })
    this.setState(state => ({ showNotifModal: !state.showNotifModal }));
  }
  render() {
    return (
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
            <img className="notification" src={require("../images/notification.png")} onClick={this.openNotifModal} />
            <span>Jessica Blume</span>
            <img className="user-picture" src={require("../images/user.png")} />
          </p>
        </div>
        <ModalNotification isOpen={this.state.isModalNotifOpen} onClose={this.closeNotifModal} />
      </div>

    )
  }
}
export default Hedaer

class ModalNotification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }


  render() {
    const { isOpen, onClose, count } = this.props;

    return (
      <div className={isOpen ? 'modal-notif modal--is-open-notif' : 'modal-notif'}>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />
        <div className='create'>Notification
                <button className="clear-btn">Clear</button>
        </div>
        <div className='clear-text'>No Notifications Yet</div>

      </div>
    );
  }
}

