import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Paper, Grid, Button, Drawer, List, ListItem, Typography, IconButton, AppBar, Toolbar, useScrollTrigger, Slide, Modal } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import '@fontsource/roboto';
import lybLogo from "./lybLogo3.png";

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



  // const pageColor = ["#E4FBFF", "#E4FBFF", "#E4FBFF", "#E4FBFF", "#E4FBFF", "#E4FBFF"]

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
      backgroundColor: "purple",
      position: "fixed",
      alignItems: "center",
      height: 60
    },
    appbarSmall: {
      backgroundColor: "purple",
      position: "fixed",
      alignItems: "left",
      height: 60
    },
    navbutton: {
      color: "white",
      fontSize: 15
    },
    navbuttonSmall: {
      color: "white",
      fontSize: 10
    },
    menuicon: {
      color: "white"
    }

  }
  return (
    <div className="App">
      <AppBar position="fixed" style={(!isDesktop) ? style.appbarSmall : style.appbar}>
        <Toolbar>
          {(!isDesktop)
          ? <>
              <Grid item xs="2" sm="2" md="2">
                <IconButton>
                  <MenuIcon style={style.menuicon}/>
                </IconButton>
              </Grid>
              <Grid item xs="10" sm="10" md="10">
                <Button style={style.navbuttonSmall} onClick={handleOpen}>New Patient</Button>
                <Button style={style.navbuttonSmall} onClick={messageOpen}>Message</Button>
              </Grid>
            </>
          : <>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[0])}>Home</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[1])}>About</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[2])}>Services</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[3])}>Contact</Button>
          <Button style={style.navbutton} onClick={handleOpen}>New Patient</Button>
          <Button style={style.navbutton} onClick={messageOpen}>Message</Button>
          </>}
          
        </Toolbar>
      </AppBar>
      
      <Grid container style={{ paddingTop: "3%" }}>
        <Grid md="12" xs="12">
          <Grid item md="12" xs="12" ref={HomeRef}>
            <div>
              <img src={lybLogo} style={style.banner}/>
            </div>
          </Grid>
          <Grid item md="12" xs="12" style={style.page}ref={AboutRef}>
            <About />
          </Grid>
          <Grid item md="12" xs="12" style={style.page}ref={ServicesRef}>
            <Services />
          </Grid>
          <Grid item md="12" xs="12" style={style.page} ref={ContactRef}>
              <Contact />
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={openForm}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <ContactForm />
      </Modal>
      <Modal
        open={openMessage}
        onClose={messageClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <MessageForm />
      </Modal>
    </div>
  );
}

export default App;
