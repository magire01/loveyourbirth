import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Paper, Grid, Button, Drawer, List, ListItem, Typography, IconButton, AppBar, Toolbar, useScrollTrigger, Slide } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import '@fontsource/roboto';
import lybLogo from "./lybLogo3.png";

import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
 

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
                <Button style={style.navbuttonSmall}>New Patient</Button>
                <Button style={style.navbuttonSmall}>Message</Button>
              </Grid>
            </>
          : <>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[0])}>Home</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[1])}>About</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[2])}>Services</Button>
          <Button style={style.navbutton} onClick={e => openPage(e, scroll[3])}>Contact</Button>
          <Button style={style.navbutton}>New Patient</Button>
          <Button style={style.navbutton}>Message</Button>
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
    </div>
  );
}

export default App;
