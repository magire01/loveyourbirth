import React, { useState, useEffect } from "react";
import "../App.css"
import { Grid, Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../Kaily1.png";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

const ToolbarItem = ({ name, md, xs, openPage, menuOpen, messageOpen }) => {

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

    const IconComponent = () => {
        switch(name) {
            case "menu":
                return (
                    <IconButton onClick={menuOpen}>
                        <MenuIcon className={"menuIcon"}/>
                    </IconButton>
                )
            case "alert":
                return (
                    <Typography component="div" style={{ color: "#ff3399", fontWeight: "bold", fontSize: (!isDesktop) ? 10 : 15 }}>Not Accepting New Patients</Typography>
                )
            case "home":
                return (
                    <IconButton onClick={e => openPage(e, 0, isDesktop)}>
                        <HomeIcon className={"iconFont"}/>
                    </IconButton>
                )
            case "facebook":
                return (
                    <a href="https://www.facebook.com/Loveyourbirthmidwifery/" target="_blank" style={{ textDecoration: "none" }}>
                        <IconButton className={"topIcon"}>
                            <FacebookIcon className={"iconFont"}/>
                        </IconButton>
                    </a>
                )
            default:
                return (
                    <IconButton onClick={messageOpen} className={"topIcon"}>
                        <EmailIcon className={"iconFont"}/>
                    </IconButton>
                )
        }
        
    }
    return (
        <Grid item md={md} xs={xs}>
            <IconComponent />
        </Grid>
       
    )
}

export default ToolbarItem;