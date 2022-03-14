import React ,{useState} from 'react'
import Logo from '../assets/pizzaLogo.png'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import {Link} from 'react-router-dom'

function Navbar() {
    
const[openLinks,setOpenLinks] = useState(false);
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <img src={Logo} alt="LOGO"/>
                    <div className="hiddenLinks">
                    <Link to = "/">Home</Link>
                    <Link to = "/menu">Menu</Link>
                    <Link to = "/about">About Us</Link>
                    <Link to = "/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to = "/">Home</Link>
                    <Link to = "/menu">Menu</Link>
                    <Link to = "/about">About Us</Link>
                    <Link to = "/contact">Contact Us</Link>
                    <i className="fas fa-bars" />
                    {/* <button>
                        <ReorderIcon />
                    </button> */}
            </div>
            
        </div>
    )
}

export default Navbar
