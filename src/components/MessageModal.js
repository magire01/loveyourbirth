import React, { useState, useEffect } from "react";
import "../App.css"
import { Grid, Button, Modal, Card } from "@material-ui/core";
import ContactForm from "./ContactForm";
import MessageForm from "./MessageForm";
import '@fontsource/roboto';

const MessageModal = ({ name, isConsult, openForm, handleOpen, handleClose, consultSnack, openMessage, messageOpen, messageClose, messageSnack }) => {

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
        newPatient: {
            backgroundColor: "#d9b3ff",
            color: "white",
            width: (!isDesktop) ? 120 : "30%",
            height: (!isDesktop) ? 35 : 50,
            fontSize: (!isDesktop) ? 8 : 14,
            fontWeight: "bold",
            marginLeft: (!isDesktop) ? 10 : "40%",
            borderRadius: 200,
            border: "3px outset #E1F0FA"
        },
        contactCard: {
            display: 'fixed',  
            justifyContent:'center', 
            alignItems:'center',
            height: (!isDesktop) ? "80%" : "80%",
            width: (!isDesktop) ? "96%" : "auto",
            margin: (!isDesktop) ? "0.5%" : 100,
            marginTop: (!isDesktop) ? 0 : 100,
            textAlign: "center",
            border: "5px solid purple",
            overflowY: "auto"
        },
        message: {
            backgroundColor: "#FDB7C2",
            color: "white",
            width: (!isDesktop) ? 120 : "30%",
            height: (!isDesktop) ? 35 : 50,
            fontSize: (!isDesktop) ? 10 : 16,
            fontWeight: "bold",
            marginRight: (!isDesktop) ? 10 : "40%",
            borderRadius: 200,
            border: "3px outset #F7E0E3"
        },
        messageCard: {
            display: 'fixed',  
            justifyContent:'center', 
            alignItems:'center',
            height: (!isDesktop) ? "80%" : "80%",
            width: (!isDesktop) ? "96%" : "auto",
            margin: (!isDesktop) ? "0.5%" : 100,
            marginTop: (!isDesktop) ? 0 : 100,
            textAlign: "center",
            border: "5px solid pink",
            overflowY: "auto"
        }
    }
    if (isConsult)
    return (
        <Grid item md="6" xs="6">
            <Button onClick={handleOpen} style={style.newPatient}>{name}</Button>
            <Modal
            open={openForm}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <Card style={style.contactCard}>
                    <ContactForm closeForm={handleClose} successConsult={consultSnack}/>
                </Card>
            </Modal>
        </Grid>
    )

    return (
        <Grid item md="6" xs="6">
            <Button onClick={messageOpen} style={style.message}>{name}</Button>
            <Modal
            open={openMessage}
            onClose={messageClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <Card style={style.messageCard}>
                    <MessageForm closeMessage={messageClose} successMessage={messageSnack}/>
                </Card>
            </Modal>
        </Grid>
    )
}

export default MessageModal;