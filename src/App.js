import './App.css';
// d063ebe8
//https://www.omdbapi.com/t=sershah&apikey=d063ebe8
import {useState} from 'react';




function App() {
  let [movieInfo,changeMovieInfo]=useState(null);
  let [title,changeTitle]=useState("the avengers");

function readTitle(value)
{
  changeTitle(value);
}
function getMovie()
{
  let url=`https://www.omdbapi.com/?t=${title}&apikey=d063ebe8`;
  fetch(url)
  .then((Response)=>Response.json())
  .then((movie)=>
  {
    changeMovieInfo(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>{
  let url=`https://www.omdbapi.com/?t=${title}&apikey=d063ebe8`;
  fetch(url)
  .then((Response)=>Response.json())
  .then((movie)=>
  {
    changeMovieInfo(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])
  return (
    <div className="App">
      <div className="container">
          <div className="padd">
            <h1>Movie Hub</h1>
          </div>
          <div>
            <input type="text" placeholder="Enter Movie Name...." className="search-field" onChange={(event)=>{readTitle(event.target.value)}}></input>
            <button className="btn" onClick={getMovie}>Search</button>
          </div>
          { movieInfo?.Error===undefined?(
          <div className="movie">
            <div className="poster">
              <img src={movieInfo?.Poster} alt="poster-img" className="poster-img"></img> 
              </div>
              <div className="details">
                <div className="padd">
                  <h1><strong>{movieInfo?.Title}</strong></h1>
                  <p><strong>Genre:</strong>{movieInfo?.Genre}</p>
                  <p><strong>Director:</strong>{movieInfo?.Director}</p>
                  <p><strong>Plot:</strong>{movieInfo?.Plot}</p>
                  <p><strong>Actors:</strong>{movieInfo?.Actors}</p>
                  <p><strong>BoxOffice:</strong>{movieInfo?.BoxOffice}</p>
                  <p><strong>Langauge:</strong>{movieInfo?.Langauge}</p>
                  <p><strong>Released Date:</strong>{movieInfo?.Released}</p>
                  <p><strong>Runtime:</strong>{movieInfo?.Runtime}</p>
                </div>
                <div className="ratings">

                                {
                                  movieInfo?.Ratings.map((rating,index)=>(
                                  <div key={index}>
                                    <strong>{rating.Source}</strong>
                                    <h3>{rating.Value}</h3>
                                  </div>
                                  ))
                                  }
                              </div>
            </div>
          </div>
           ):<h1>Sorry....Movie Not Found!!</h1> }
      </div>
    </div>
  );
}

export default App;
