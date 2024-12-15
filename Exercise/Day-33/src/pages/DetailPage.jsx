import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Detail Page</h1>
      <h3>ID : {id}</h3>
      <ul>
        {data.ingredients?.map((ingredient, index) => (
          <li key={index}>Ingredient: {ingredient}</li>
        ))}
      </ul>
      <h3>Prep Time: {data.prepTimeMinutes || "N/A"}</h3>
      <h3>Cook Time: {data.cookTimeMinutes || "N/A"}</h3>
      <h3>Difficulty: {data.difficulty || "N/A"}</h3>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default DetailPage;
