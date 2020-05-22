import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import './proxies.css'

class  Proxies extends React.Component {
  constructor(props){
    super(props);

    this.state={
      showStore:false,
      isModalOpen: false,
      showModal:false,
    }
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

 

handleChangeStyle() {
  this.setState(state => ({
    showStore: !state.showStore
  }));
}

openModal() {
  this.setState( state=>({isModalOpen:!state.isModalOpen }));
  this.setState(state => ({
    showModal: !state.showModal
  }));
}

closeModal () {
  this.setState({ isModalOpen: false })
  this.setState(state => ({
    showModal: !state.showModal
  }));
}
  
  render()
{
  return (
    <div className="App">
      <aside className="task">
        <img className="logo" src={require("../images/logo.png")}/>
        <Link to = '/'><p className="middle" ><img src={require("../images/Grey/Group 409.png")} />Task</p></Link>
        <Link to ='/proxies'><p style={{color:"white"}} className="middle"><img src={require("../images/proxies.png")}  />Proxies</p></Link>
        <Link to = '/billing'><p className="middle"><img src={require("../images/Grey/Group 411.png")} />Billing</p></Link>
        <Link to = '/accounts'><p className="middle"><img src={require("../images/Grey/Group 412.png")} />Accounts</p></Link>
        <Link to = '/rates'><p className="middle"><img src={require("../images/Grey/Group 413.png")} />Rates</p></Link>
        <Link to = '/settings'><p className="middle"><img src={require("../images/Grey/Group 414.png")} />Settings</p></Link>
        </aside>
        
        
        
        <main>
          <div className='content'> 
            <div className="search-section">
              <input className="search" type="text" placeholder="Search"  style={{display: this.state.showStore ? 'block' : 'none' }}  />
              <img className="search-icon" src={require("../images/search.png")}  onClick={this.handleChangeStyle}  />
            </div>
            <div className="user">
              <div className="close-icon">
                <img className="minimize" src={require("../images/minimize.png")} />
                <img  src={require("../images/close.png")} />
              </div>
              <p>
                <img className="notification" src={require("../images/notification.png")} />
                <span>Jessica Blume</span>
                <img className="user-picture" src={require("../images/user.png")} />
              </p>
            </div>
          </div>


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
                  <span className='plus'>+</span>
                  <select className="proxilist list-decoration">
                    <option>No Proxy list</option>
                    <option>Select Account</option>
                    <option>Select Account</option>
                  </select>
                </div>
                
                </div>
                <Test isOpen={this.state.isModalOpen} onClose={this.closeModal}/>
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
                    <p style={{display: this.state.showModal ?'none' : 'block' }}  >Create a Proxy List To Get Started</p>
                   
                    </div>
                    <div className='proxi-btn-icon'>
                      <div className="btn">
                        <button onClick={this.openModal}><img src={require("../images/plus.png")}  /> <span className="mobile-view" >Create Proxies</span></button>
                        <button><img src={require('../images/trash.png')} /><span className="mobile-view" >Clear All Proxies</span></button>
                        <button><img src={require('../images/test.png')} /><span className="mobile-view" >Test All Proxies</span></button>
                        <button><img src={require("../images/buy.png")} /><span className="mobile-view" >Buy Proxies</span></button>
                      
                        
                        </div>
                        
                        </div>
                        
        </main>
        
</div>

   
)}

};
export default Proxies

class Test extends React.Component {
  constructor(props){
    super(props);

    this.state={
      count:0,
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState( state=>({count:state.count + 1 }));
   
  }

  decrementCount(){
    this.setState( state=>({count:state.count - 1}))
  }
  render () {
    const { isOpen, onClose,count } = this.props;
 
    return (
      <div className={isOpen ? 'modal modal--is-open-proxies' : 'modal'}>
        <div className="close-icon">
              <img  src={require("../images/close.png")} onClick={onClose}/>
              </div><br/><br/>
              <input className='create-proxies' placeholder='Add Proxies' disabled="true" />
             <input className='import-proxies' placeholder="Import Proxies From File" disabled='true'></input>
              <textarea className='proxies-text' placeholder='Text..'></textarea>

              <button className="add-proxies" > <span className="mobile-view">Add</span> <img src={require("../images/plus.png")}  /></button>
            </div>
    );
  }
}




