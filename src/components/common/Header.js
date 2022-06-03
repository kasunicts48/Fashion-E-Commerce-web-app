import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const numberOfItems = cart.length;
  console.log(numberOfItems);
  const NavLinks = [
    {
      title: "ALL ITEMS",
      link: "/all-items",
    },
    {
      title: "DRESSES",
      link: "/dresses",
    },
    {
      title: "SEASONAL",
      link: "/seasonal",
    },
    {
      title: "DENIMS",
      link: "/denims",
    },
    {
      title: "TSHIRTS",
      link: "/t-shirts",
    },
    {
      title: "TOPS",
      link: "/tops",
    },
  ];

  return (
    <div>
      <Navbar
        onToggle={() => console.log("Toggle")}
        onSelect={(eventKey) => console.log(eventKey)}
        style={{
          background: "#CE93D8",
          padding: "8px 22px",
          fontFamily: "Poppins",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
        collapseOnSelect
        expand="lg"
        //  bg="dark"
        //  variant="dark"
      >
        <Navbar.Brand href="/">Fashion Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {NavLinks.map((val, key) => {
              return (
                <NavLink
                  key={key}
                  activeStyle={{
                    fontWeight: "500",
                    color: "#9C27B0",
                  }}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingLeft: "12px",
                  }}
                  to={val.link}
                >
                  {val.title}
                </NavLink>
              );
            })}
          </Nav>
          <Nav>
            <NavLink
              activeStyle={{
                fontWeight: "500",
                color: "#8E24AA",
              }}
              style={{
                color: "white",
                textDecoration: "none",
                paddingLeft: "12px",
              }}
              to="/cart"
            >
              CART {numberOfItems > 0 && `(${numberOfItems})`}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
