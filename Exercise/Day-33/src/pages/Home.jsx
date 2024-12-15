import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    const [Data, setData] = useState([]);

    const [skip, setSkip] = useState(0);
    const limit = 3
    const [currentPage, setCurrentPage] = useState(1);
    
    const getData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
        setData(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getData();
    }, []);

    const handleNext = () => {
      setSkip(skip + limit);
      setCurrentPage(currentPage + 1);
    };

    const handleBack = () => {
      setSkip(skip - limit);
      setCurrentPage(currentPage - 1);
    };
    
    useEffect(() => {
      getData();
    }, [skip]);

    return (
      <div className="container py-4 mx-auto">
        <Navbar />
        <div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleNext}>
            Next
          </button>
          <p>{currentPage}</p>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleBack}>
            Back
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Data.map((item) => {
          return (
            <div key={item.id} className="p-4 bg-white rounded-lg shadow-lg">
              <h1 className="text-xl font-bold">{item.name}</h1>
              <ul className="pl-4 list-disc">
                {item.ingredients.map((ingridient) => (
                  <li key={ingridient}>{ingridient}</li>
                ))}
              </ul>
              <h3 className="text-lg">Prep Time: {item.prepTimeMinutes}</h3>
              <h3 className="text-lg">Cook Time: {item.cookTimeMinutes}</h3>
              <h3 className="text-lg">Difficulty {item.difficulty}</h3>
              <img src={item.image} alt={item.name} className="object-cover w-16 h-16 mb-2 rounded-full" />
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
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