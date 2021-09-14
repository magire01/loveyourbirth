import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Modal, Card, CardHeader } from "@material-ui/core";

import ContactForm from "./ContactForm";
import MessageForm from "./MessageForm";

import '@fontsource/roboto';

const Contact = () => {
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
            <Grid item md="6" xs="12">
                <Button onClick={handleOpen}>New Patient Form</Button>
                <Modal
                    open={openForm}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <ContactForm />
                </Modal>
            </Grid>
            <Grid item md="6" xs="12">
                <Button onClick={messageOpen}>Send Message</Button>
                <Modal
                    open={openMessage}
                    onClose={messageClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <MessageForm />
                </Modal>
            </Grid>
            <Grid item md="12" xs="12">
                <Card>
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