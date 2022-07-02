import './navbar.css'
import { Link } from 'react-router-dom'
import Pricing from './Pricing';
import Resources from './Resources';
import Feature from './Feature';
export default function Navbar() {
    return (
        <div className="navbar">
            <div>
                <span>
                    <h1><Link to="/" style={{ textDecoration: "none" }}>shortly</Link></h1>
                </span>
            </div>

            <div className="main">
                <span>
                    <Link to='/feature' style={{ textDecoration: "none" }}>Feature</Link>
                    <Link to='/pricing' style={{ textDecoration: "none" }}>Pricing</Link>
                    <Link to='/resources' style={{ textDecoration: "none" }}>Resource</Link>
                </span>
            </div>
            <div>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div>
    )
}