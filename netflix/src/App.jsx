/* eslint-disable react/jsx-key */
import "./App.css";
import Section from "./components/Section";
import movies from "./assets/movies.json";

function App() {
  // const tabMovies = movies.map((elem) => elem);
  // console.log(tabMovies);
  {
    movies.map((elem) => {
      // console.log(elem.category);
      return <Section name={elem.category} view="" />;
    });
  }
}

export default App;
