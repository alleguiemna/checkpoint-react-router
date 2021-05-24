import { movieData } from "./data";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import AddMovie from "./components/AddMovie/AddMovie";
import Footer from "./components/Footer/Footer";
import MovieDetails  from "./components/MovieDetails/MovieDetails";
import { BrowserRouter as Router, Route} from 'react-router-dom'




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
    setMovieList([...movieList, newMovie]);
  };
  return (
    <div className="App">
      <Router>
      <Filter
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
        rating={rating}
      />
      
      <Route path="/"  exact render={() =><MovieList
        movieList={movieList.filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rating >= rating
        )}/> }/>
      <Route path="/:id" render={(props) => <MovieDetails {...props} movieList={movieList}/>}/>
      <Route path="/" render={() =><AddMovie handleAdd={handleAdd}/>}/>
      <Route path="/" component={Footer} />
     
      </Router>
      
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
