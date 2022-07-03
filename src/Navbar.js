import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Skious Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color : "white",
                    backgroundColor : "#357af1",
                    borderRadius : '8px',
                    padding:  '8px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;