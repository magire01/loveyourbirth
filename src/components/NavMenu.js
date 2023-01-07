import React, { useState, useEffect } from "react";
import { Grid, Button, Menu, MenuItem, Typography, IconButton, AppBar, Toolbar, Modal, Card, Snackbar, SnackbarContent, colors, ListItemSecondaryAction, Divider } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../Kaily1.png";

const NavMenu = ({ openPage, menuClose, anchorEl, }) => {

    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    //Style
    const style = {
        aboutFont: {
            color: "#730099",
            padding: (!isDesktop) ? "10px 10px 20px 10px" : "10px 40px 20px 40px",
            fontSize: 18,
            marginTop: 10
        },
        experienceFont: {
            color: "#730099",
            padding: (!isDesktop) ? "10px 10px 20px 10px" : "10px 0px 20px 0px",
            fontSize: 18
        },
        subTitle: {
            color: "white",
            fontSize: 20,
            borderBottom: "3px solid #730099",
            borderRight: "3px solid #730099",
            backgroundColor: "#FDB7C2",
            margin: "auto",
            marginBottom: 5,
            marginTop: 10,
            borderRadius: 5,
            width: 300
        },
        picture: {
            width: (!isDesktop) ? 200 : 250,
            height: "auto",
            marginTop: 30,
            marginBottom: (!isDesktop) ? 0 : 0,
            borderRadius: 40,
            border: "2px solid #730099"
        },
        title: {
            fontSize: (!isDesktop) ? 20 : 20,
            color: "#730099",
            margin: "10px 0px 10px 0px",
            fontWeight: "bold"
        },
        section: {
            padding: "20px 0px 50px 0px",
            height: "auto"
        }
    }

    const page = ["About", "Services", "Resources", "Contact"]
    const mobilePage = ["About", "Pregnancy", "Labor & Birth", "Postpartum & Newborn", "Resources", "Contact"]

    return (
        <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={menuClose}
              background="transparent"
              style={{ opacity: 0.7 }}
            >
              {(!isDesktop) 
              ? mobilePage.map((data, index) => (
                <MenuItem style={style.mobilemenuItem} onClick={e => openPage(e, index + 1, false)}>{data}</MenuItem>
              ))
              : page.map((data, index) => (
                  <MenuItem style={style.menuItem} onClick={e => openPage(e, index + 1, true)}>{data}</MenuItem>
              ))}
        </Menu>
    )
}

export default NavMenu;