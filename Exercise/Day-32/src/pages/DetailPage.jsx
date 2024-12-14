import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const DetailPage = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const getDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/:id`);
        setData(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getDetail();
    }, [id]);

    return (
        <div>
            <Navbar />
            <h1>Detail Page</h1>
            <h3>ID : {id}</h3>
            <ul>
                {data.ingredients?.map(ingredient => (
                    <li key={ingredient}>Ingredient : {ingredient}</li>
                ))}
            </ul>
            <h3>Prep Time : {data.prepTimeMinutes}</h3>
            <h3>Cook Time : {data.cookTimeMinutes}</h3>
            <h3>Difficulty : {data.difficulty}</h3>
            <Link to="/">Back Home</Link>
        </div>
    )
}
export default DetailPage