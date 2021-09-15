import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Modal, Card, CardHeader } from "@material-ui/core";

import ContactForm from "./ContactForm";
import MessageForm from "./MessageForm";

import '@fontsource/roboto';

const Contact = () => {

    const style = {
        newPatient: {
            backgroundColor: "purple",
            color: "white",
            width: "60%",
            height: 70,
            fontSize: 20,
            fontWeight: "bold",
            margin: 10,
            borderRadius: 200,
            border: "3px outset pink"
        },
        message: {
            backgroundColor: "#F29AFF",
            color: "white",
            width: "60%",
            height: 70,
            fontSize: 20,
            fontWeight: "bold",
            margin: 10,
            borderRadius: 200,
            border: "3px outset pink"
        },
        card: {
            marginTop: 50,
            marginBottom: 60,
            marginRight: "5%",
            marginLeft: "5%",
            paddingTop: 20,
            paddingBottom: 40,
            backgroundColor: "#0671B7",
            color: "white",
            borderRadius: 30
        }
    }

    const [openForm, setOpenForm] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);

    const handleOpen = () => {
        setOpenForm(true);
      }
    
    const handleClose = () => {
    setOpenForm(false);
    }

    const messageOpen = () => {
        setOpenMessage(true)
    }

    const messageClose = () => {
        setOpenMessage(false)
    }

    return (
        <Grid container direction="row">
            <Grid item md="12" xs="12">
                <Card style={style.card}>
                    <CardHeader title="Contact" />
                    <Grid container direction="row" alignItems="center">
                        <Grid item md="4" xs="12">
                            <Typography>Phone: 555-555-5555</Typography>
                        </Grid>
                        <Grid item md="4" xs="12">
                            <Typography>Email: mag@gmail.yeet</Typography>
                        </Grid>
                        <Grid item md="4" xs="12">
                            <Typography>PO Box: 123252</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Contact;