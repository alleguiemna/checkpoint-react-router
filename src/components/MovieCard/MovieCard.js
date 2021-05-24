import React from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Calendar, Clock, Layout, User } from "react-feather";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const renderTooltip = (props) => (
    <Tooltip id="img-tooltip" {...props} >
      <h6 style={{textAlign:"left"}}>{movie.title}</h6>
      <p style={{textAlign:"left"}}>
        <Clock size="15px" style={{textAlign:"left",color:"#B8611F"}}/>
        {movie.duration}
        <Calendar size="15px" style={{textAlign:"left",color:"#B8611F"}}/>
        {movie.dateDeSortie}
      </p>
      <p style={{textAlign:"left"}}>{movie.description}</p>
      <p style={{textAlign:"left"}}>
        <Layout size="15px" style={{textAlign:"left",color:"#B8611F"}} />
        Genre:{movie.genre}
      </p>
      <p style={{textAlign:"left"}}>
        <User size="15px" style={{textAlign:"left",color:"#B8611F"}}/>
        Director:{movie.director}
      </p>
    </Tooltip>
  );
  return (
    <div>
      
        <Card className="movie" style={{ backgroundColor: "#141414" }}>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Card.Img
              variant="top"
              src={movie.posterUrl}
              style={{ height: "200px", width: "160px", margin: "20px 20px" }}
            />
          </OverlayTrigger>

          <h6>
            {movie.title} <br />{" "}
          </h6>
          <h6>
            <ReactStars
              count={8}
              isHalf={true}
              value={movie.rating}
              size={24}
              activeColor="#ffd700"
            />{" "}
            <br />{" "}
          </h6>
          <h6 style={{ color: "#B8611F" }}>{movie.dateDeSortie}</h6>
        </Card>
        <Link to={`/${movie.id}`}><Button variant="outline-secondary" style={{justifyContent:"center",marginTop:"20px",marginBottom:"20px", marginLeft:"50px"}}>Click here</Button></Link>
    
    </div>
  );
};

export default MovieCard;
