import React from "react";
import { Button } from "react-bootstrap";
import {
  AlertTriangle,
  Calendar,
  Clock,
  Disc,
  Download,
  Facebook,
  FileText,
  Heart,
  HelpCircle,
  Lock,
  Mail,
  PlayCircle,
  Twitter,
  User,
  Youtube,
} from "react-feather";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const MovieDetails = ({ movieList, match }) => {
  const movie = movieList.find(
    (elt) => elt.id.toString() === match.params.id.toString()
  );
  console.log({ movie });
  return (
    <div style={{ backgroundColor: "#111611" }} className="">
      <div style={{marginLeft:"80px",marginRight:"80px"}}>
      <Button
        variant="outline-secondary"
        style={{ marginLeft: "400px", marginRight: "30px", marginTop: "30px" }}
      >
        <PlayCircle color="#B8611F" />
        Rgarder le film
      </Button>
      <Button variant="outline-secondary" style={{ marginTop: "30px" }}>
        <Download color="#B8611F" />
        Télecharger en <trong>HD</trong>
      </Button>
      <div
        style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "240px" }}
      >
        <iframe
          width="700px"
          height="500px"
          src={movie.trailer}
          title={movie.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Button
        variant="outline-dark"
        style={{
          borderColor: "#00FF00",
          marginLeft: "460px",
          marginTop: "7px",
          marginButtom: "30px",
          width: "250px",
          height: "40px",
        }}
      >
        {" "}
        <Download color="#00FF00" />
        <span style={{ color: "#00FF00" }}>Télecharger</span>
        <a style={{ color: "white" }} href="#">
          [4.94GB]
        </a>
      </Button>
      <p style={{ color: "white", marginTop: "20px" }}>
        <AlertTriangle color="#B8611F" />
        Veuillez attendre un moment pour charger le lecteur, si le lecteur ne
        fonctionne pas, passez au deuxième lecteur ou réparez le système
        d'exploitation de votre navigateur.
      </p>
      <Button
        style={{
          backgroundColor: "#B8611F",
          borderColor: "#B8611F",
          height: "57px",
          marginRight: "8px",
        }}
      >
        Server <br /> French-4K
      </Button>
      <Button
        className="btn1"
        variant="outline-secondary"
        style={{ height: "57px", marginRight: "8px" }}
      >
        Supervideo <br /> French-HDrip
      </Button>
      <Button
        className="btn1"
        variant="outline-secondary"
        style={{ height: "57px" }}
      >
        Youtube <br /> French-HDrip
      </Button>
      <div className="d-flex">
        <div>
          <img
            style={{
              width: "200px",
              heigth: "300px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
            src={movie.posterUrl}
            alt=""
          />
        </div>
        <div style={{ marginTop: "30px", marginLeft: "10px" }}>
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif 300 30px",
              lineHeight: "36px",
              color: "#B8611F",
            }}
          >
            {movie.title} en streaming{" "}
            <span>
              <Facebook
                style={{
                  size: "20px",
                  color: "white",
                  marginRight: "1px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#4267B2",
                  borderRadius: "50px",
                }}
              />{" "}
              <Twitter
                style={{
                  size: "20px",
                  color: "white",
                  marginRight: "6px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#1DA1F2",
                  borderRadius: "50px",
                }}
              />
              <Youtube
                style={{
                  size: "20px",
                  color: "white",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#FF0000",
                  borderRadius: "50px",
                }}
              />
            </span>
          </h3>
          <p style={{ color: "white" }}>{movie.description}</p>
          <div className="d-flex ">
            <ReactStars
              count={8}
              isHalf={true}
              value={movie.rating}
              size={20}
              activeColor="#ffd700"
            />{" "}
            <Clock style={{ size: "12px", marginLeft: "20px" }} />
            {movie.duration}
            <Calendar style={{ size: "12px", marginLeft: "20px" }} />
            {movie.dateDeSortie}
          </div>
        </div>
      </div>
      <p
        style={{
          color: "#B8611F",
          marginTop: "20px",
          textDecoration: "underline",
        }}
      >
        <FileText size="24px" color="#B8611F" />
        Info
      </p>
      <h6 style={{ color: "white" }}>
        <Disc color="#B8611F" size="18px" />
        Date de sortie:
        <span style={{ color: "#B8611F" }}>{movie.dateDeSortie}</span>
      </h6>
      <h6 style={{ color: "white" }}>
        <Disc color="#B8611F" size="18px" />
        Genre:<span style={{ color: "#B8611F" }}>{movie.genre}</span>
      </h6>
      <h6 style={{ color: "white" }}>
        <Disc color="#B8611F" size="18px" />
        Directeurs:<span style={{ color: "#B8611F" }}>{movie.director}</span>
      </h6>
      <h6 style={{ color: "white" }}>
        <Disc color="#B8611F" size="18px" />
        Durée de film:<span style={{ color: "#B8611F" }}>{movie.duration}</span>
      </h6>
      <Link to="/">
        <Button
          variant="outline-secondary" 
          style={{ marginTop: "20px", marginBottom: "20px" ,marginLeft:"550px"}}
        >
          Back to Home
        </Button>
      </Link>
      <div style={{ background: "#1C1C1C",borderRadius:"5px" }}>
        <div
          className="d-flex justify-content-around"
          style={{
            color: "white",
            borderBottom: "2px solid gray",
          }}
        >
          <h6>Comments:</h6>
          <h6>hdss.movie</h6>
          <h6>
            <Lock />
            Regles de confidentialité de Disqus
          </h6>
        </div>

        <div className="d-flex " style={{ marginTop: "20px" }}>
          <p style={{ color: "white", marginRight: "40px" }}>
            <Heart color="deeppink" />
            Recommander
          </p>
          <p
            style={{
              height: "25px",
              width: "70px",
              backgroundColor: "#1DA1F2",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            <Twitter style={{ marginLeft: "25px" }} />
          </p>
          <p
            style={{
              height: "25px",
              width: "70px",
              backgroundColor: "#4267B2",
              borderRadius: "5px",
            }}
          >
            <Facebook style={{ marginLeft: "25px" }} />
          </p>
        </div>
        <div >
          <User
            color="white"
            size="50px"
          />
          <input type="text" style={{height:"50px",width:"990px"}}/>
        </div>
        <div className="" style={{marginTop:"20px"}} >
          <p style={{ color: "white" }}>
            S'IDENTIFIER AVEC<span style={{marginLeft:"40px"}}>OU INSCRIVEZ VOUS SUR YOUTUBE<HelpCircle/></span>
          </p>
          <p style={{ color: "white" }}>
            <Twitter style={{
              height: "30px",
              width: "30px",
              backgroundColor: "#1DA1F2",
              borderRadius: "50px",
              marginRight:"6px"
            }}/>
            <Facebook style={{
              height: "30px",
              width: "30px",
              backgroundColor: "#4267B2",
              borderRadius: "50px",
              marginRight:"6px"
            }}/>
            <Youtube style={{
              height: "30px",
              width: "30px",
              backgroundColor: "#FF0000",
              borderRadius: "50px",
            }}/>
            <span style={{marginLeft:"100px"}}>
              <input type="text" style={{height:"30px",width:"990px"}} />
            </span>
          </p>
          <p style={{marginTop:"70px",paddingBottom:"70px",textAlign:"center",color:"white"}}>Soyer la premiére a commenter.</p>
          <div className="d-flex justify-content-around"style={{color:"white",borderTop: "2px solid gray"}}>
            <p><Mail/>S'abonner</p>
            <p>Ajoutez Disqus à votre site web !</p>
            <p><AlertTriangle/>Do Not Sell My Data</p>
            <h6>DISQUS</h6>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MovieDetails;
