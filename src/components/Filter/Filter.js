import React from "react";
import {
  Form,
  FormControl,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Film, Home, LogIn, Menu } from "react-feather";
import { Link } from "react-router-dom";

const Filter = ({ handleChange, title, ratingChanged, rating }) => {
  const renderTooltipMenuFilm = (props) => (
    <Tooltip id="h6-menu-film-tooltip" {...props}>
      <div
        className="list"
        style={{
          listStyle: "none",
          height: "100px",
          width: "200px",
          margineft: "-80px",
        }}
      >
        <li>
          <strong>Prochainement</strong>
        </li>
        <li
          style={{
            marginLeft: "-27px",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <strong>Nouveaux</strong>
        </li>
        <li style={{ marginLeft: "-38px" }}>
          <strong> VOSTFR</strong>
        </li>
      </div>
    </Tooltip>
  );
  const renderToolTipMenu = (props) => (
    <Tooltip id="h6-menu-tooltip" {...props}>
      <div
        className="d-flex"
        style={{
          maxHeight: "200px",
          width: "300px",
          overflow: "scroll",
          overflowX: "hidden",
          background: "black",
        }}
      >
        <div>
          <ul style={{ listStyle: "none", textAlign: "flex start" }}>
            <li>
              <strong>Action</strong>
            </li>
            <li>
              <strong>Biopic</strong>
            </li>
            <li>
              <strong>Epouvante</strong>
            </li>
            <li>
              <strong>Fantastique</strong>
            </li>
            <li>
              <strong>judiciaire</strong>
            </li>
            <li>
              <strong>Romance</strong>
            </li>
            <li>
              <strong>Western</strong>
            </li>
            <li>
              <strong>Documentation</strong>
            </li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>Aventure</strong>
            </li>
            <li>
              <strong>Comedie</strong>
            </li>
            <li>
              <strong>Episonnage</strong>
            </li>
            <li>
              <strong>Guerre</strong>
            </li>
            <li>
              <strong>Medical</strong>
            </li>
            <li>
              <strong>Science-fiction</strong>
            </li>
            <li>
              <strong>Musical</strong>
            </li>
            <li>
              <strong>Crime</strong>
            </li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>Animation</strong>
            </li>
            <li>
              <strong>Drame</strong>
            </li>
            <li>
              <strong>Famille</strong>
            </li>
            <li>
              <strong>Historique</strong>
            </li>
            <li>
              <strong>Policier</strong>
            </li>
            <li>
              <strong>Thriller</strong>
            </li>
            <li>
              <strong>Sport event</strong>
            </li>
            <li>
              <strong>Mystere</strong>
            </li>
          </ul>
        </div>
      </div>
    </Tooltip>
  );

  return (
    <div style={{ backgroundColor: "#080805" }}>
      <Navbar
        className="d-flex justify-content-around "
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
        <Link to="/" style={{color:"white"}}>
          <h6 style={{ color: "white" }}>
            <Home className="home" size="20" color="white" />
            ACCEUIL
          </h6>
        </Link>
        <Link to="/MenuFilm" style={{color:"white"}}>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltipMenuFilm}
          >
            <h6 style={{ color: "white" }}>
              <Film className="film" size="20" color="white" />
              MENU FILMS
            </h6>
          </OverlayTrigger>
        </Link>
        <Link to="/Menu" style={{color:"white"}}>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderToolTipMenu}
          >
            <h6 style={{ color: "white", marginRight: "150px" }}>
              <Menu className="menu" size="20" color="white" />
              MENU
            </h6>
          </OverlayTrigger>
        </Link>
        <Link to="/Login" style={{color:"white"}}>
          <h6 style={{ marginLeft: "-150px", color: "white" }}>
            <LogIn className="film" size="20" color="white" />
            LOGIN
          </h6>
        </Link>
        <div>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              mx="20px -50px"
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
