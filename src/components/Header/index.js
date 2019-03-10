// REACT
import React from 'react';

// ROUTER
import {Link, NavLink, withRouter} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from '../../state/actions/auth';

// ==========

class Header extends React.Component {
  render () {
    // const user = {
    //   first_name: this.props.user.first_name,
    //   last_name: this.props.user.last_name,
    //   photo: this.props.user.photo,
    //   role_id: this.props.user.role_id
    // };
    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            NOOSPHERE
            {/* <img src="../assets/wrightstream-logo-horizontal.svg" alt="WrightStream" /> */}
          </Link>
          <span role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/characters">Characters</NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/campaigns">Campaigns</NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/compendium">Compendium</NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link is-hidden-touch">
                Tools
                </span>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/character-builder">Character Builder</Link>
                <Link className="navbar-item" to="/arena">Arena</Link>
                <Link className="navbar-item" to="/dice-roller">Dice Roller</Link>
                <Link className="navbar-item" to="/calculator">Calculator</Link>
              </div>
            </div>
          </div>
          {
            !this.props.authorized ? (
              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <span className="navbar-link is-hidden-touch">
                    <figure className="image profile">
                      {/* {
                        user.photo ? (
                          <img src={user.photo} alt={`${user.first_name} ${user.last_name}`} />
                        ) : (
                            <span>{user.first_name[0]}{user.last_name[0]}</span>
                          )
                      } */}
                      <img src="https://avatars2.githubusercontent.com/u/24664730?s=460&v=4" alt="Vikanda Gonzales" />
                    </figure>
                    {/* <span>{user.first_name}</span> */}
                    Vikanda
                  </span>
                  <div className="navbar-dropdown is-right">
                    <Link className="navbar-item" to="/profile">Profile</Link>
                    <Link className="navbar-item" to="/settings">Settings</Link>
                    <Link className="navbar-item" to="/help">Help</Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item is-active" to="/" onClick={this.props.logout}>Log Out</Link>
                  </div>
                </div>
              </div>
            ) : (
                <div className="navbar-end">
                  <Link className="navbar-item" to="/login">Log In</Link>
                  <Link className="navbar-item" to="/signup">Sign Up</Link>
                </div>
              )
          }
        </div>
      </nav>
    );
  };
};

const mapStateToProps = state => ({
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));