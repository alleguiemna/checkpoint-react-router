import React from "react";
import { Navbar } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-feather";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#111611" }}>
      <Navbar
        className="d-flex justify-content-around"
        style={{
          backgroundColor: "#080805",
          borderRadius: "2px",
          marginLeft: "150px",
          marginRight: "50px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <div style={{ marginBottom: "15px", marginLeft: "-200px" }}>
          <img
            src="https://hdss.watch/templates/hdss/images/LOGO-2.png"
            width="239 px"
            height="40 px"
            className=""
            alt=""
          />
        </div>

        <div style={{ marginRight: "-200px" }}>
          <Facebook
            style={{
              border: "1px solid dark",
              height: "40px",
              width: "40px",
              borderRadius: "3px",
              background: "#14140D",
              fill: "white",
              margin: "5px 5px",
            }}
          />
          <Twitter
            style={{
              border: "1px solid dark",
              height: "40px",
              width: "40px",
              borderRadius: "3px",
              background: "#14140D",
              fill: "white",
              margin: "5px 5px",
            }}
          />
          <Youtube
            style={{
              border: "1px solid dark",
              height: "40px",
              width: "40px",
              borderRadius: "3px",
              background: "#14140D",
              fill: "white",
              margin: "5px 5px",
            }}
          />
          <Instagram
            style={{
              border: "1px solid dark",
              height: "40px",
              width: "40px",
              borderRadius: "3px",
              background: "#14140D",
              fill: "white",
              margin: "5px 5px",
            }}
          />
        </div>
      </Navbar>
    </div>
  );
};

export default Footer;
