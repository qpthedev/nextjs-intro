import { useEffect, useState } from "react";
import SEO from "../components/SEO";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      ).json();
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <SEO title="Home" />
      <h1>Hello</h1>
    </div>
  );
}
