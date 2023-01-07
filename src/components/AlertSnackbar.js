import React, { useState, useEffect } from "react";
import "../App.css"
import { Snackbar, SnackbarContent } from "@material-ui/core";
import '@fontsource/roboto';

const AlertSnackbar = ({ open, onClose, autoHideDuration, message }) => {

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
        },
        success: {
            backgroundColor: "#8cd98c",
            alignItems: "center",
            color: 'white'
      }
    }

    return (
        <Snackbar
          open={open}
          onClose={onClose}
          autoHideDuration={autoHideDuration}
        >
            <SnackbarContent message={message} style={style.success}/>
        </Snackbar>
    )
}

export default AlertSnackbar;