import React, { useState, useEffect } from "react";
import { Grid, Typography, AppBar, Toolbar } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../Kaily1.png";

const Appbar = () => {

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
    return (
        <AppBar position="fixed" elevation={5} style={{ height: (!isDesktop) ? 50 : 60, position: "fixed", backgroundColor: "#A9D1EA" }}>
            <Toolbar> 
                <Grid container alignItems="center" justifyContent="flex-start">
                    <Grid item md={1} xs={1}>
                        <IconButton onClick={menuOpen}>
                            <MenuIcon className={"menuIcon"}/>
                        </IconButton>
                    </Grid>
                <Grid item md={8} xs={5}> 
                    <Typography component="div" style={{ color: "#ff3399", fontWeight: "bold", fontSize: (!isDesktop) ? 10 : 15 }}>Not Accepting New Patients</Typography>
                </Grid>
                <Grid item md={1} xs={2}>
                    <IconButton onClick={e => openPage(e, scroll[0])}>
                        <HomeIcon className={"iconFont"}/>
                    </IconButton>
                </Grid>
                <Grid item md={1} xs={2}>
                    <a href="https://www.facebook.com/Loveyourbirthmidwifery/" target="_blank" style={{ textDecoration: "none" }}>
                        <IconButton className={"topIcon"}>
                            <FacebookIcon className={"iconFont"}/>
                        </IconButton>
                    </a>
                </Grid>
                <Grid item md={1} xs={2}>
                    <IconButton onClick={messageOpen} className={"topIcon"}>
                        <EmailIcon className={"iconFont"}/>
                    </IconButton>
                </Grid>
  {/* NAV MENU */}
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
                            <MenuItem style={style.mobilemenuItem} onClick={e => openPage(e, mobileScroll[index + 1])}>{data}</MenuItem>
                        ))
                        : page.map((data, index) => (
                            <MenuItem style={style.menuItem} onClick={e => openPage(e, scroll[index + 1])}>{data}</MenuItem>
                        ))}
                    </Menu>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;