import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card } from "@material-ui/core";

import '@fontsource/roboto';

const MessageForm = () => {

    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    //Send Email
    const [message, setMessage] = useState({
            name: "",
            email: "",
            phone: "",
            text: ""
        })
    const handleMessageName = (e) => {
        setMessage({ ...message, name: e.target.value })
    }
    const handleMessageEmail = (e) => {
        setMessage({ ...message, email: e.target.value })
    }
    const handleMessagePhone = (e) => {
        setMessage({ ...message, phone: e.target.value })
    }
    const handleMessageText = (e) => {
        setMessage({ ...message, text: e.target.value })
    }
    //Style
    const style = {
        card: {
            display: 'absolute',  
            justifyContent:'center', 
            alignItems:'center',
            height: 600,
            width: (!isDesktop) ? "97%" : "auto",
            margin: (!isDesktop) ? 0 : 100,
            marginTop: (!isDesktop) ? "20%" : 100,
            textAlign: "center",
            border: "5px solid pink"
        },
        title: {
            marginTop: 20,
            marginBottom: 20
        },
        question: {
            marginTop: 20,
            marginBottom: 20
        },
        input: {
            marginTop: 20,
            marginBottom: 20
        },
        button: {
            marginTop: 20,
            marginBottom: 20
        }
    }

    

    
    return (
        <>
            <Card style={style.card}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Grid item md="12" xs="12">
                        <Typography style={style.title}>Email Us</Typography>
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography>Name</Typography>
                        <input onChange={handleMessageName}/>
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography>Email</Typography>
                        <input onChange={handleMessageEmail}/>
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography>Phone</Typography>
                        <input onChange={handleMessagePhone}/>
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography>Message</Typography>
                        <textarea onChange={handleMessageText}></textarea>
                    </Grid>
                    <Grid item md="12" xs="12">
                        <Button style={style.button}>Send</Button>
                    </Grid>        
                </Grid>
            </Card>
        </>
    )
}

export default MessageForm;