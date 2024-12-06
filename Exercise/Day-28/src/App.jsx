import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UsersList from "./components/UserList";

function App() {
  const logo = "Nizam Corp";
  const title = "JAYA JAYA JAYA JAYA";
  const menuList = ["Menu", "Contact us", "Login"];

  const users = [
    {
      name: "John",
      age: 30,
      city: "San Francisco",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      name: "Jane",
      age: 25,
      city: "Chicago",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      name: "Bob",
      age: 19,
      city: "Los Angeles",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
  ];
  return (
    <div>
      {/* melempar props */}
      <Navbar propLogo={logo} title={title} menus={menuList} />
      <Footer />
      <UsersList propUser={users} />
    </div>
  );
}

export default App;
