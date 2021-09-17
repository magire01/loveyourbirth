import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, Card, IconButton } from "@material-ui/core";
import '@fontsource/roboto';
import emailjs from 'emailjs-com';
import CloseIcon from '@material-ui/icons/Close';

const MessageForm = (props) => {

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

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_brv7il1', 'template_66y7sf6', { name: message.name, email: message.email, phone: message.phone, text: message.text}, 'user_VCNwVyQVStaLfnvdfDv4t')
        .then((result) => {
            console.log(result.text);
            props.successMessage();
        }, (error) => {
            console.log(error.text);
        });
        props.closeMessage();
    };
    //Style
    const style = {
        card: {
            display: 'fixed',  
            justifyContent:'center', 
            alignItems:'center',
            height: (!isDesktop) ? "60%" : "80%",
            width: (!isDesktop) ? "97%" : "auto",
            margin: (!isDesktop) ? 0 : 100,
            marginTop: (!isDesktop) ? 0 : 100,
            textAlign: "center",
            border: "5px solid pink",
            backgroundColor: "white"
        },
        title: {
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
        },
        submit: { 
            // position: "absolute", 
            // bottom: (!isDesktop) ? "40%" : "10%",
            color: "white",
            backgroundColor: "#FDB7C2"
        },
        questionSection: {
            height: (!isDesktop) ? 200 : 400,
            marginBottom: 100
        },
        questionSection2: {
            height: (!isDesktop) ? 100 : 100,
            marginBottom: "3%"
        },
        questionSection3: {
            height: (!isDesktop) ? 200: 500
        },
        smallInput: {
            width: (!isDesktop) ? 200: 350,
            
        },
        largeInput: {
            width: (!isDesktop) ? "100%": 500,
            height: (!isDesktop) ? 100 : 200
        },
        label: {
            height: (!isDesktop) ? "50%" : "80%",
            marginTop: 5,
            marginBottom: (!isDesktop) ? 5 : 10,
            color: "#ff3399",
            fontSize: (!isDesktop) ? 12 : 20,
            fontWeight: "bold"
        },
        container: {
            height: (!isDesktop) ? "15%" : "80%"
        }
    }
    
    return (
        <Grid container alignItems="center" justifyContent="left">
            <IconButton>
                <CloseIcon onClick={props.closeMessage} />
            </IconButton>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item md="12" xs="12" style={style.container}>
                    <Typography>Email Us</Typography>
                    <Typography style={style.label}>Name</Typography>
                    <input style={style.smallInput} onChange={handleMessageName}/>
                    <Typography style={style.label}>Email</Typography>
                    <input style={style.smallInput} onChange={handleMessageEmail}/>
                    <Typography style={style.label}>Phone</Typography>
                    <input style={style.smallInput} onChange={handleMessagePhone}/>
                    <Typography style={style.label}>Message</Typography>
                    <textarea style={style.largeInput} onChange={handleMessageText}></textarea>
                </Grid>
                <Grid item md="12" xs="12">
                    <Button onClick={sendEmail} style={style.submit}>Send</Button>
                </Grid>     
            </Grid>
        </Grid>
    )
}

export default MessageForm;