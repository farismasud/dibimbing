import "./style.css"
import logo from "../../assets/logo.png"

export const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={logo} alt="logo" />
                    </div>
                        <div className="navbar-items">
                            <p>Home</p>
                            <p>About</p>
                            <p>Projects</p>
                            <p>Services</p>
                            <p>Contact</p>
                        </div>
                </div>
            </div>
        </div>
    )
}