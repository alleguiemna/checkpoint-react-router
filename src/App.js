import { movieData } from "./data";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import AddMovie from "./components/AddMovie/AddMovie";
import Footer from "./components/Footer/Footer";
import { Button } from "react-bootstrap";

function App() {
  const [movieList, setMovieList] = useState(movieData);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie])
  };
  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
        rating={rating}
      />
      <MovieList
        movieList={movieList.filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rating >= rating
        )}
      />
      <AddMovie handleAdd={handleAdd} />
      <div className="suite" style={{ backgroundColor: "#111611" }}>
        <Button variant="outline-secondary">1</Button>
        <Button variant="outline-secondary">2</Button>
        <Button variant="outline-secondary">3</Button>
        <Button variant="outline-secondary">4</Button>
        <Button variant="outline-secondary">5</Button>
        <Button variant="outline-secondary">6</Button>
        <Button variant="outline-secondary">7</Button>
        <Button variant="outline-secondary">8</Button>
        <Button variant="outline-secondary">9</Button>
        <Button variant="outline-secondary">10</Button>
        <Button variant="outline-secondary">...</Button>
        <Button variant="outline-secondary">Next</Button>
      </div>
      <Footer />
      <p
        style={{
          fontFamily: "Montserrat,sans-serif 300 30px",
          lineHeight: "21px",
          color: "rgb(255,255,255)",
          background: "#111611",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        Film Streaming HD Complet By Hugen 2020
      </p>
    </div>
  );
}

export default App;
