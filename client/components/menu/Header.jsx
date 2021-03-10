import React, { useState } from 'react';
import NProgress from 'nprogress'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
} from 'reactstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signout, isAuthenticated } from '../../actions/auth'
import styles from '../Component.module.css'
import { IoLogIn, IoPersonAddSharp } from 'react-icons/io5'
import Link from "next/link";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { menuData } from '../../MenuData/menu';
import { Tooltip } from '@material-ui/core';
import Router from 'next/router';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#233c91", color: "#ffffff" }} expand="md">
        <NavbarBrand><img width={35} height={35} src="https://img.icons8.com/emoji/2x/lion-emoji.png" alt="selu mascot" /></NavbarBrand>
        <Link href="/"><NavLink className={styles.App_Name}>LionsShare</NavLink></Link>
        <NavbarToggler className={styles.navbar_toggler} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* {
              menuData.map((item, index) => (
                (
                  <Link href={item.link}>
                    <NavLink className="font-weight-bold" key={index}>
                      {
                        item.title
                      }
                    </NavLink>
                  </Link>
                )
              ))
            } */}
            {
              !isAuthenticated() && (<React.Fragment>
                <UncontrolledDropdown size="lg" nav inNavbar>
                  <DropdownToggle className={styles.Toggle_Start} style={{ color: "#ffffff" }} nav caret>
                    Get Started
              </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link href="/signin"><span>Sign In</span></Link> &nbsp;<IoLogIn />
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link href="/signup"><span>Sign Up</span></Link> &nbsp;<IoPersonAddSharp />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </React.Fragment>
              )
            }

            {
              isAuthenticated() && isAuthenticated().role === 0 && (
                <>
                  <NavItem>
                    <Link href="/user">
                      <NavLink className={styles.User_Dashboard}> {`${isAuthenticated().name}'s Dashboard`} </NavLink>
                    </Link>
                  </NavItem>
                </>
              )
            }

            {
              isAuthenticated() && isAuthenticated().role === 1 && (
                <>
                  <NavItem>
                    <Link href="/admin">
                      <NavLink className={styles.Admin_Dashboard}> {`${isAuthenticated().name}'s Dashboard`} </NavLink>
                    </Link>
                  </NavItem>
                </>
              )
            }

            {
              isAuthenticated() && (
                <>
                  <NavItem style={{ marginTop: "6px", marginLeft: "8px" }}>
                    <Tooltip title="Silvin Pradhan" arrow interactive><AccountCircleIcon /></Tooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ cursor: 'pointer', border: 'none', color: "#fff" }} onClick={() => signout(() => { Router.replace(`/signin`) })}> <ExitToAppIcon />Sign Out</NavLink>
                  </NavItem>
                </>
              )
            }

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;