import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    const [Data, setData] = useState([]);
    const getData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setData(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getData();
    }, []);

    return (
      <div >
        <Navbar />
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {Data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              {item.ingredients.map((ingridient) => (
                <p key={ingridient}>Ingredient: {ingridient}</p>
              ))}
              <h3>Prep Time: {item.prepTimeMinutes}</h3>
              <h3>Cook Time: {item.cookTimeMinutes}</h3>
              <h3>Difficulty {item.difficulty}</h3>
              <button>
                <Link to={`/detail-page/${item.id}`}>Details</Link>
              </button>
            </div>
            
          );
        })}
      </div>
      </div>
    );
  };
  export default Home;