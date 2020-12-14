import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import Header from '../header/header';




class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStore: false,
      isModalOpen: false,
      showModal: false,
      isOpenCaptcha: false,
      showCaptcha: false,

    }
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.OpenCaptcha = this.OpenCaptcha.bind(this);
    this.closeCaptcha = this.closeCaptcha.bind(this);

  }


  handleChangeStyle() {
    this.setState(state => ({ showStore: !state.showStore }));
  }

  openModal() {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    this.setState(state => ({ showModal: !state.showModal }));
    this.setState({ showCaptcha: false })
    this.setState({ isOpenCaptcha: false })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
    this.setState(state => ({ showModal: !state.showModal }));
  }

  OpenCaptcha() {
    this.setState(state => ({ isOpenCaptcha: !state.isOpenCaptcha }))
    this.setState(state => ({ showCaptcha: !state.showCaptcha }))
    
    this.setState({ isModalOpen: false })
    this.setState({ showModal:false });

  }

  closeCaptcha() {
    this.setState({ showCaptcha: false })
    this.setState(state => ({ isOpenCaptcha: !state.isOpenCaptcha }))
  }

  render() {
    return (
      <div className="app">
        <aside className="task">
          <img className="logo" src={require("../images/logo.png")} />
          <Link to='/'><p className="middle" style={{ color: "white" }}><img src={require("../images/task.png")} />Task</p></Link>
          <Link to='/proxies'><p className="middle"><img src={require("../images/Grey/Group 410.png")} />Proxies</p></Link>
          <Link to='/billing'><p className="middle"><img src={require("../images/Grey/Group 411.png")} />Billing</p></Link>
          <Link to='/accounts'><p className="middle"><img src={require("../images/Grey/Group 412.png")} />Accounts</p></Link>
          <Link to='/rates'><p className="middle"><img src={require("../images/Grey/Group 413.png")} />Rates</p></Link>
          <Link to='/settings'><p className="middle"><img src={require("../images/Grey/Group 414.png")} />Settings</p></Link>
        </aside>



        <main>
          <Header />
          <div className='rubric'>Task</div>
{/* 
          <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
          <ModalCapchta isOpen={this.state.isOpenCaptcha} onClose={this.closeCaptcha} /> */}
          <div className="menu">
            <ul>
              <li>Store</li>
              <li>Product</li>
              <li>Size</li>
              <li>Profile</li>
              <li>Proxies</li>
              <li>Status</li>
              <li style={{ padding: '0 0 0 120px' }}>Actions</li>
            </ul>
            <p style={{ display: this.state.showModal ? 'none' : 'block' }}  >Create Some Tasks To Get Started</p>

          </div>
          <div className='btn-icon'>
            <div className="btn">
              <button onClick={this.openModal}><img src={require("../images/plus.png")} /> <span className="mobile-view" >Create Task</span></button>
              <button><img src={require('../images/trash.png')} /><span className="mobile-view" >Clear All Tasks</span></button>
              <button><img src={require('../images/start-up.png')} /><span className="mobile-view" >Start All Tasks</span></button>
              <button><img src={require("../images/stop.png")} /><span className="mobile-view" >Stop All Tasks</span></button>
              <button onClick={this.OpenCaptcha}><img src={require('../images/wireframe.png')} /><span className="mobile-view" >Captcha</span></button>

            </div>

          </div>

        </main>

      </div>


    )
  }

};
export default Home

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState(state => ({ count: state.count + 1 }));

  }

  decrementCount() {
    this.setState(state => ({ count: state.count - 1 }))
  }
  render() {
    const { isOpen, onClose, count } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />
        <div className='create'>Create Tasks</div>

        <select className="store select-decoration">
          <option >Store</option>
          <option>Store</option>
          <option>Store</option>
        </select>
        <select className="store select-decoration">
          <option >Size</option>
          <option> &nbsp;5  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35.5</option>
          <option> &nbsp;5  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35.5</option>
          <option> US  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; EUR</option>
        </select>

        <select className="store select-decoration">
          <option>Select Proxies</option>
          <option>Select Proxies</option>
          <option>Select All</option>
        </select>
        <select className="store select-decoration">
          <option>Select Profile</option>
          <option>Select Profile</option>
          <option>Select All</option>
        </select>
        <select className="store select-decoration">
          <option>Account</option>
          <option>Account</option>
        </select>
        <input className="store search-decoration" placeholder="Product" />
        <div className='date-section'>

          <span>Start Time :</span>
          <input type="date" value="2020-01-01" />
          <span>00:00:00</span>
          <button className="settings-btn"><img src={require('../images/settings-ligth.png')} /></button>
          <button className="close-btn"><img src={require('../images/close-ligth.png')} /></button>
        </div>
        <div className="final-create">
          <div className="create-task"><button className='task-create'> Create</button></div>
          <div className="count-result">
            <button className="count" onClick={this.incrementCount}>+</button>
            <div className="total-count">{this.state.count}</div>
            <button className="count-one" onClick={this.decrementCount}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

class ModalCapchta extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { isOpen, onClose, } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open-captcha' : 'modal-captcha'}>
        <div className="close-icon">
          <img src={require("../images/close.png")} onClick={onClose} />
        </div><br /><br />


        <div className='captcha'>Captcha Queue</div>
        <div className='captcha-btn'>
          <button >Solver 1 <img src={require("../images/close.png")} /></button>
          <button >Solver 1 <img src={require("../images/close.png")} /> </button>
          <button >Solver 1 <img src={require("../images/close.png")} /></button>
          <button style={{ border: 'none' }}>Solver 1 <img src={require("../images/close.png")} /></button>
        </div>
        <div className="video-section">
          <img className='waiting' src={require('../images/waiting.png')}  />
          <p>Waiting</p>
          <img className='youtube-logo' src={require('../images/youtube.png')}  />
        </div>
        <div className ='repate'>
        <select className="google-account " >
            <option>Google Account</option>
            
          </select>
          <div className='repate-btn'>
          <button><img  src={require('../images/trash.png')} /></button>
          <img style={{marginTop:"10px"}}  src={require('../images/plus.png')} />
       
          <button><img  src={require('../images/repate.png')} /></button>
          </div>
          
        </div>
        <div  className ='captcha-proxy'>
        <input placeholder='Proxy ( IP Auth Only)' />
        </div>
        
      </div>
    );
  }
}


