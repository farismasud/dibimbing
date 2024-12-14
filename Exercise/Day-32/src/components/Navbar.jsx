
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="text-white hover:text-gray-200" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-200" to="/login">Login</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-200" to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;