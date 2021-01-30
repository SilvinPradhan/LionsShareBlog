import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../../HeaderData/menu"
import { menuData } from '../../HeaderData/menu';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LionsShare</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{ padding: "5px" }}>
            {
              menuData.map((item, index) => (
                (<NavItem>
                  <NavLink to={item.link} key={index}>
                    {
                      item.title
                    }
                  </NavLink>
                </NavItem>)
              ))
            }
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