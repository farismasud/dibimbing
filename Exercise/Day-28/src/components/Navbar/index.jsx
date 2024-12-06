import './styles.css'

// menerima props lewat parameter
// const Navbar = (data) => {
//     console.log(data); //cara pertama
// const Navbar = ({propLogo, title}) => { //cara kedua
    const Navbar = (props) => {
        
        // destructuring method
    const { propLogo, title, menus } = props; //cara ketiga

    
  return (
    <div>
      <div>
        <h1>{propLogo}</h1>
        <h1>{title}</h1>
        {/* <h1>{title}</h1> */}
      </div>
      <div>
        {/* <p>Menu</p>
        <p>Contact us</p>
        <p>Login</p> */}
        <ul>
            {menus.map((menu, index) => (
                <li key={index}>{menu}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
