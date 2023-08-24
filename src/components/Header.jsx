import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import logo from "../Images/logo.png";
import { Badge } from "@mui/material";

export const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth token");
    sessionStorage.removeItem("User Id");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem("Auth token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", checkAuthToken);

    return () => {
      window.removeEventListener("storage", checkAuthToken);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#0A192F", position: "fixed" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <Link to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                style={{ height: "80px", width: "90px" }}
              ></img>
            </Link>{" "}
          </div>

          <div>
            <Link to="/">
              <div className="navbtn">Home</div>
            </Link>
            <Link to="/Contact">
              <div className="navbtn">Contact</div>
            </Link>
          </div>
          <div>
            <Link to="/Cart">
              {" "}
              <IconButton sx={{ color: "white" , marginRight:"10px"}}>
              <Badge badgeContent={cartCount>0 ?cartCount:0 } color="secondary">
              <ShoppingCartRoundedIcon />
              </Badge>  
              </IconButton>
            </Link>

            {isLoggedIn ? (
              <Button variant="outlined" onClick={handleLogout}>
                Log Out
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Sign Up</Button>
                </Link>
                <Link to="/register">
                  {" "}
                  <Button variant="outlined" sx={{ marginLeft: "6px" }}>
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
};
