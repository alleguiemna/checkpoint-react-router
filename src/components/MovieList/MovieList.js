/*import React, { useState } from "react";*/
import { Button, Carousel } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
/*import styled from "styled-components";*/

const MovieList = ({ movieList }) => {
  /*let dark = "#333333";
  let orange = "#B8611F";
  const [buttonColor, setButtonColor] = useState(dark);
  const handleColorChange = (e) => {
    const button = e.target.style.backgroundColor;
    const newButton = e.target.style.backgroundColor;
    const newColor = buttonColor === dark ? orange : dark;
    e.target.style.backgroundColor = newColor;
  };*/
  /*const HoverButton = styled.button`
    backgroundColor: black;
    '&:hover': {
      backgroundColor: gray;
      cursor: pointer;
    }
  `;*/
  return (
    <div className="" style={{ backgroundColor: "#111611" }}>
      <div className="topFilm">
        <h1
          style={{
            fontFamily: "Montserrat,sans-serif 300 24px",
            lineHeight: "36px",
            color: "rgb(255,255,255)",
            marginLeft: "150px",
          }}
        >
          TOP FILMS:
          <br />
          <div style={{marginLeft:"310px"}}>
            <Carousel className="carousel" style={{height:"180px",width:"250px"}}>
              <Carousel.Item interval={4500}>
                <img
                  className="d-block w-100"
                  src="https://www.joblo.com/assets/images/joblo/posters/2019/09/jumanjinextimax.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>jumanji next level</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100"
                  src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_960,q_70,w_360/v1/invites/w3oyruluno6vywtmqyof.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Joker</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/564x/24/e7/a5/24e7a5128e2c410384a46818c54506ab.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>ip Man 4</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/564x/8b/49/9f/8b499f1ec8a0851b6ee7afe54093661c.jpg"
                  alt=""
                />
                <Carousel.Caption >
                  <h6>la reine des neiges 2</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/originals/41/7c/a2/417ca21c1584089841071dc189b0363d.png"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Maletique: le pouvoir du Mal</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/736x/c3/80/88/c380885a1ecaf2c91d01c2a2107f6c32.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Fast and Furius Hobbs and Shaw</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/564x/51/41/d8/5141d8f0f441f230fcc8c9a6c5e42a59.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Mulan</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://images-na.ssl-images-amazon.com/images/I/81SAqNnNlfL._AC_SY679_.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Godzilla vs kong</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://media.senscritique.com/media/000019772712/source_big/Dragons_Retrouvailles.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Dragon : retrouvailles</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/originals/48/34/32/483432223447c93715915065950c5c05.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h6>Wonder woman"</h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </h1>
        <h4
          style={{
            fontFamily: "Montserrat,sans-serif 700 18px",
            lineHeight: "27px",
            color: "rgb(0,255,0)",
            textAlign: "center",
          }}
        >
          Veuillez faire ATTENTION aux FAKES COPIE de notre site{" "}
        </h4>
        <h4
          style={{
            fontFamily: "Montserrat,sans-serif 700 18px",
            lineHeight: "27px",
            color: "rgb(0,255,0)",
            textAlign: "center",
          }}
        >
          Vérifiez que l'adresse du site commence bien par :
          <span
            style={{
              fontFamily: "Montserrat,sans-serif 700 18px",
              lineHeight: "27px",
              color: "rgb(255,0,0)",
              textAlign: "center",
            }}
          >
            {" "}
            HDSS.WATCH
          </span>
        </h4>
        <h1
          style={{
            fontFamily: "Montserrat,sans-serif 300 24px",
            lineHeight: "36px",
            color: "rgb(255,255,255)",
            marginLeft: "150px",
          }}
        >
          DERNIERS FILMS AJOUTÉS :
          <Button variant="outline-secondary"> VOIR PLUS...</Button>
        </h1>
      </div>
      <div className="row col-sm-8 " style={{ marginLeft: "250px" }}>
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
