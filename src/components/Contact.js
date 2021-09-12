import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Modal } from "@material-ui/core";

import ContactForm from "./ContactForm";

import '@fontsource/roboto';

const Contact = () => {
    const [openForm, setOpenForm] = useState(false);

    const handleOpen = () => {
        setOpenForm(true);
      }
    
    const handleClose = () => {
    setOpenForm(false);
    }

    return (
        <>
            <Typography variant="h5">Contact</Typography>
            <Button onClick={handleOpen}>Contact Me</Button>
            <Modal
                open={openForm}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                <ContactForm />
            </Modal>
            <Typography>test blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah test</Typography>
            <Typography>test blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah test</Typography>
            <Typography>test blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah testtest blah blah blah test</Typography>
        
        </>
    )
}

export default Contact;