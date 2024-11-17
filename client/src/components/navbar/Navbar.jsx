import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  // const { loading, error, dispatch } = useContext(AuthContext);
  const [logout,setLogout]=useState(false);
  const handleLogout = async ()=>{
    try {
			const res = await fetch("http://localhost:8800/api/auth/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();

			if (data.error) {
				// showToast("Error", data.error, "error");
				return;
			}

			localStorage.removeItem("user");
			// setUser(null);
      setLogout(true);
      dispatch({ type: "LOGOUT" });
      
		} catch (error) {
			console.log("error occured")
		}
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Stay Heaven</span>
        </Link>
        {user ? ( <div className="login-logout-container">
                  <div className="user">Welcome {user.username}!</div>
                  
                <div className="">
                  <button onClick={handleLogout} className="logout">Log Out</button>
                </div>
          </div>) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
            <Link to="/register">
               <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
