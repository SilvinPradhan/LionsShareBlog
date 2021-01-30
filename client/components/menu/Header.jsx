import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Link from "next/link";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../../MenuData/menu"
import { menuData } from '../../MenuData/menu';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/"><NavbarBrand>LionsShare</NavbarBrand></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{ padding: "5px" }}>
            {
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
            }
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Get Started
              </DropdownToggle>
              <DropdownMenu right>
                {
                  menuData.map((item, index) => (
                    (
                      <DropdownItem>
                        <Link href={item.link}>
                          <NavLink className="font-weight-bold" key={index}>
                            {
                              item.title
                            }
                          </NavLink>
                        </Link>
                      </DropdownItem>
                    )
                  ))
                }
                {/* <DropdownItem>
                  Sign In
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Sign Up
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem style={{ marginTop: "6px" }}>
              <AccountCircleIcon />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;