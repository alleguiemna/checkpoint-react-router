import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Film, Home, Menu } from "react-feather";

const Filter = ({ handleChange, title, ratingChanged, rating }) => {
  return (
    <div style={{ backgroundColor: "#080805" }}>
      <Navbar
        className="d-flex justify-content-around"
        style={{
          borderRadius: "2px",
          marginLeft: "150px",
          marginRight: "50px",
          paddingTop: "25px",
          paddingBottom: "25px",
        }}
      >
        <img
          src="https://hdss.watch/templates/hdss/images/LOGO-2.png"
          width="239 px"
          height="40 px"
          className=""
          alt=""
        />{" "}
        <h6 style={{ color: "white" }}>
          <Home />
          ACCEUIL
        </h6>
        <h6 style={{ color: "white" }}>
          <Film />
          MENU FILMS
        </h6>
        <h6 style={{ color: "white" }}>
          <Menu />
          MENU
        </h6>
        <h6 style={{ color: "white" }}>DCMA</h6>
        <div>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              mx="20px 50px"
              className="mr-sm-2"
              onChange={handleChange}
              value={title}
            />
          </Form>
          <ReactStars
            count={8}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
      </Navbar>
    </div>
  );
};

export default Filter;
