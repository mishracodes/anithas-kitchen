import React from "react";
import classes from "./Navbar.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@mui/material";
const Navbar = () => {
  return (
    <div className={classes.nav__main}>
      <img src="assets/logo.png" alt="logo" className={classes.nav_main_logo} />
      <p>Swanky Restaurant - Admin Dashboard</p>
      <div className={classes.nav_more} >
        <Avatar sx={{width:"30px", height:"30px"}}>A</Avatar>
        <p className={classes.nav__item__username}>
            <ExpandMoreIcon
            className={classes.nav__item__expandmore}
            sx={{ fontSize: "17px" }}
            />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
