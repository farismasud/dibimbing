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
    <div className="container p-4 mx-auto">
      <Navbar />
      <h1 className="mb-4 text-3xl font-bold">Detail Page</h1>
      <h3 className="mb-2 text-xl">ID: {id}</h3>
      <ul className="pl-5 mb-4 list-disc">
        {data.ingredients?.map((ingredient, index) => (
          <li key={index} className="mb-1">Ingredient: {ingredient}</li>
        ))}
      </ul>
      <h3 className="mb-2 text-lg">Prep Time: {data.prepTimeMinutes || "N/A"}</h3>
      <h3 className="mb-2 text-lg">Cook Time: {data.cookTimeMinutes || "N/A"}</h3>
      <h3 className="mb-4 text-lg">Difficulty: {data.difficulty || "N/A"}</h3>
      <img src={data.image} alt={data.title} className="object-cover w-56 h-56 mb-4 rounded-lg shadow-lg" />
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        <Link to="/" className="text-white hover:underline">Back Home</Link>
      </button>
    </div>
  );
};

export default DetailPage;
