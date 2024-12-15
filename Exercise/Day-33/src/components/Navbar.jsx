import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem("access_token")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setTimeout(() => {
      navigate("/login")
    }, 2000)
  }

  return (
    <nav className="py-2 bg-gray-800">
      <div className="container flex justify-between mx-auto">
        <Link to="/" className="text-xl text-white">
          Navbar ala ala
        </Link>
        <div className="flex">
          <Link to="/profil-page" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Profile
          </Link>
          {
            token ? (
              <button
                onClick={ handleLogout }
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
                Login
              </Link>
            )
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;