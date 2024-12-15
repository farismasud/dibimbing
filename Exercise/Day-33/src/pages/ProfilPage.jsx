import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProfilPage = () => {
    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        const token = localStorage.getItem('access_token');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        try {
            const response = await axios.get(`https://dummyjson.com/users/me`, config);
            setProfile(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <h1>Profil</h1>
            <h1>{profile.username}</h1>
            <p>{profile.email}</p>
            <img src={profile.image} alt={profile.username} />
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                <Link to="/" className="text-black hover:underline">Back Home</Link>
            </button>
        </div>
    )
}

export default ProfilPage