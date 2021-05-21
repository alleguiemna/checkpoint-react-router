import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie">
        <Card style={{ backgroundColor: "#141414" }}>
          <Card.Img
            variant="top"
            src={movie.posterUrl}
            style={{ height: "200px", width: "160px", margin: "20px 20px" }}
          />
          <p>
            {movie.title} <br />{" "}
          </p>
          <p>
            <ReactStars
              count={8}
              isHalf={true}
              value={movie.rating}
              size={24}
              activeColor="#ffd700"
            />{" "}
            <br />{" "}
          </p>
          <p style={{ color: "#B8611F" }}>{movie.dateDeSortie}</p>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;
