import './App.css';
import React, { useState, useRef } from "react";
import { Paper, Grid, Button, Drawer, List, ListItem, Typography, IconButton, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import '@fontsource/roboto';
import lybLogo from "./lybLogo3.png";

import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
 

function App() {
  const scrollToRef = (ref) => window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop
  })
  const HomeRef = useRef()
  const ContactRef = useRef()
  const AboutRef = useRef()
  const ServicesRef = useRef()
  const scroll = [HomeRef, AboutRef, ServicesRef, ContactRef]
  const page = ["Home", "About", "Services", "Contact"]

  const [openNav, setOpenNav] = useState(false);
  
  const openDrawer = (e) => {
    e.preventDefault();
    setOpenNav(!openNav);
  }

  const openPage = (e, page) => {
    e.preventDefault();
    scrollToRef(page);
  }

  const pageColor = ["#E4FBFF", "#E4FBFF", "#E4FBFF", "#E4FBFF", "#E4FBFF", "#E4FBFF"]

  const style = {
    banner: {
      width: "50%",
      height: "auto"
    },
    page: {
      marginTop: "3%",
      marginBottom: "5%",
      marginLeft: "3%",
      marginRight: "3%"
    },
    page1: {
      paddingTop: "5%", 
      paddingBottom: "5%",
      paddingRight: "5%",
      paddingLeft: "5%",
      backgroundColor: pageColor[0]
    },
    page2: {
      paddingTop: "5%", 
      paddingBottom: "5%", 
      paddingRight: "5%",
      paddingLeft: "5%",
      backgroundColor: pageColor[1]
    },
    page3: {
      paddingTop: "5%", 
      paddingBottom: "5%", 
      paddingRight: "5%",
      paddingLeft: "5%",
      backgroundColor: pageColor[2]
    },
    page4: {
      paddingTop: "5%", 
      paddingBottom: "5%", 
      paddingRight: "5%",
      paddingLeft: "5%",
      backgroundColor: pageColor[3]
    },
    page5: {
      paddingTop: "5%", 
      paddingBottom: "5%", 
      paddingRight: "5%",
      paddingLeft: "5%",
      backgroundColor: pageColor[4]
    },
    appbar: {
      backgroundColor: "purple",
      position: "fixex",
      alignItems: "center"
    },
    navbutton: {
      color: "white",
      fontSize: 15
    }

  }
  return (
    <div className="App">
      <AppBar position="fixed" style={style.appbar}>
        <Toolbar>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[1])}>About</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[2])}>Services</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[3])}>Contact</Button>
          <Button style={style.navbutton}>New Patient</Button>
          <Button style={style.navbutton}>Message</Button>
        </Toolbar>
      </AppBar>
      <Grid container style={{ paddingTop: "3%" }}>
        <Grid md="12" xs="12">
          <Grid item md="12" xs="12" ref={HomeRef}>
            <div>
              <img src={lybLogo} style={style.banner}/>
            </div>
          </Grid>
        <Grid md="1" xs="1">
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

        <Grid md="1" xs="1">
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
