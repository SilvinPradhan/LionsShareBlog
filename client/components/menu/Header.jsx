import React, { useState } from 'react';
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
import styles from '../Component.module.css'
import { IoLogIn, IoPersonAddSharp } from 'react-icons/io5'
import Link from "next/link";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { menuData } from '../../MenuData/menu';
import { Tooltip } from '@material-ui/core';

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
            <NavItem style={{ marginTop: "6px", marginLeft: "8px" }}>
              <Tooltip title="Silvin Pradhan" arrow interactive><AccountCircleIcon /></Tooltip>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;