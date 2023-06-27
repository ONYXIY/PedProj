import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';




const Nav = (props) =>{
  
    

    return (
    <nav className={classes.nav}>
    <div className={classes.item} >
    <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/dialogs'className = { navData => navData.isActive ? classes.active : classes.item } >Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='news' className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='music' className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='setting' className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='Friends' className = { navData => navData.isActive ? classes.active : classes.item }>Friends</NavLink>
    </div>
    {/* <div>
      <fastFriend friends = {props.state.friends}/>
    </div> */}
  </nav>
    )
}
export default Nav;