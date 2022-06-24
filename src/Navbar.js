const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Skious Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color : "white",
                    backgroundColor : "#357af1",
                    borderRadius : '8px',
                    padding:  '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;