import Navbar from './components/Navbar'
import Products from './components/Products';
import nikeBlazzer77 from './assets/nike-blazzer-77.png';
import nikeAirForce1High from './assets/nika-air-force-1-high.png';
import nikeDunk from './assets/nikedunk.png';

function App() {

  const productList = [
    {
      id: 1,
      name: "Nike Blazzer 77",
      description: "Mens Shoes",
      image: nikeBlazzer77,
      price: 19.99,
      colors: ["red", "blue", "green"],
    },
    {
      id: 2,
      name: "Nike Air Force 1 High",
      description: "Mens Shoes",
      image: nikeAirForce1High,
      price: 40,
      colors: ["red", "blue", "green", "white"],
    },
    {
      id: 3,
      name: "Nike Dunk ",
      description: "Mens Shoes",
      image: nikeDunk,
      price: 12,
      colors: ["red", "blue"],
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-red-400">Hello Vite + React!</h1>
        <Navbar />
        <h1 style={{ color: 'red' }}>Hello World</h1>
        <Products product={productList} />
      </div>
    </>
  )
}

export default App
