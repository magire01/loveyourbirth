import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Paper, Grid, Button, Menu, MenuItem, Typography, IconButton, AppBar, Toolbar, useScrollTrigger, Slide, Modal } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import '@fontsource/roboto';
import lybLogo from "./lybLogo3.png";

import Home from './components/Home';
import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import MessageForm from './components/MessageForm';
 

function App() {

  //Scroll Nav
  const scrollToRef = (ref) => window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop-50
  })
  const HomeRef = useRef()
  const ContactRef = useRef()
  const AboutRef = useRef()
  const ServicesRef = useRef()
  const scroll = [HomeRef, AboutRef, ServicesRef, ContactRef]
  const page = ["Home", "About", "Services", "Contact"]

  const openPage = (e, page) => {
    e.preventDefault();
    scrollToRef(page);
    menuClose();
  }

  //Nav Rendering for Smartphone vs Laptop
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //Open Form and Message Functions
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

    //mobile menu
    const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuClose = () => {
    setAnchorEl(null);
  };
  //colors
  const colorScheme = {
    navbar: "#67A3D9",
    navbutton: "white",
    background1: "#E5COC8"

  }
  //style
  const style = {
    banner: {
      width: (!isDesktop) ? "100%" : "45%",
      height: "auto",
      marginTop: (!isDesktop) ? 40 : 10
    },
    page: {
      marginTop: "3%",
      marginBottom: "5%",
      marginLeft: "1%",
      marginRight: "1%"
    },
    appbar: {
      backgroundColor: colorScheme.navbar,
      position: "fixed",
      alignItems: "center",
      height: 60
    },
    appbarSmall: {
      backgroundColor: colorScheme.navbar,
      height: 50,
      position: "flex",
      paddingRight: 20
    },
    navbutton: {
      color: colorScheme.navbutton,
      fontSize: 15,
      marginRight: 10,
      marginLeft: 10
    },
    navbuttonSmall: {
      color: colorScheme.navbutton,
      fontSize: 10,
      marginLeft: 30
    },
    menuicon: {
      color: colorScheme.navbutton,
      position: "flex",
      alignItems: "left",
    },
    mobilemenu: {
      backgroundColor: "white"
    },
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
    }
  }
  return (
    <div className="App">
      <AppBar position="fixed" style={(!isDesktop) ? style.appbarSmall : style.appbar}>
        <Toolbar>
          {(!isDesktop)
          ? <>
              <Grid item>
                <IconButton>
                  <MenuIcon style={style.menuicon} onClick={menuOpen}/>
                </IconButton>
              </Grid>
              <Grid item xs="10" sm="10" md="10">
                <Button style={style.navbuttonSmall} onClick={handleOpen}>New Patient</Button>
                <Button style={style.navbuttonSmall} onClick={messageOpen}>Message</Button>
              </Grid>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={menuClose}
              >
                {page.map((data, index) => (
                    <MenuItem style={style.mobilemenu} onClick={e => openPage(e, scroll[index])}>{data}</MenuItem>
                ))}
              </Menu>
            </>
          : <>
          {page.map((data, index) => (
            <Button style={style.navbutton} onClick={e => openPage(e, scroll[index])}>{data}</Button>
          ))}
          <Button style={style.navbutton} onClick={handleOpen}>New Patient</Button>
          <Button style={style.navbutton} onClick={messageOpen}>Message</Button>
          </>}
          
        </Toolbar>
      </AppBar>
      
      <Grid container direction="row" alignItems="center" style={{ paddingTop: "3%" }}>
        <Grid item md="12" xs="12">
            <img src={lybLogo} style={style.banner}/>
        </Grid>
        <Grid item md="12" xs="12" style={style.page}ref={HomeRef}>
          <Home />
        </Grid>
        <Grid item md="12" xs="12" style={style.page}ref={AboutRef}>
          <About />
        </Grid>
        <Grid item md="12" xs="12" style={style.page}ref={ServicesRef}>
          <Services />
        </Grid>
        <Grid item md="6" xs="12">
          <Button onClick={handleOpen} style={style.newPatient}>New Patient Form</Button>
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
          <Button onClick={messageOpen} style={style.message}>Send Message</Button>
          <Modal
              open={openMessage}
              onClose={messageClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              >
              <MessageForm />
          </Modal>
        </Grid>
        <Grid item md="12" xs="12" style={style.page} ref={ContactRef}>
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
