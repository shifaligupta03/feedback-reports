import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return ''
      case false:

      default:
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}){
  return { auth}
}
export default connect(mapStateToProps)(Header);
