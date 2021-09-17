import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Grid, Button, Menu, MenuItem, Typography, IconButton, AppBar, Toolbar, Modal, Card, Snackbar, SnackbarContent } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import '@fontsource/roboto';
import lybLogo from "./lybLogo3.png";
import Home from './components/Home';
import About from "./components/About";
import Prenatal from './components/Prenatal';
import Birth from './components/Birth';
import Newborn from './components/Newborn';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import MessageForm from './components/MessageForm';
 
const App = () => {
  //Scroll Nav
  const scrollToRef = (ref) => window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop-50
  })
  const HomeRef = useRef()
  const ContactRef = useRef()
  const AboutRef = useRef()
  const ServicesRef = useRef()
  const PrenatalRef = useRef();
  const BirthRef = useRef();
  const NewbornRef = useRef();
  const scroll = [HomeRef, AboutRef, ServicesRef, ContactRef]
  const page = ["About", "Services", "Contact"]
  const mobilePage = ["About", "Pregnancy", "Labor & Birth", "Postpartum & Newborn", "Contact"]
  const mobileScroll = [HomeRef, AboutRef, PrenatalRef, BirthRef, NewbornRef, ContactRef]

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
      navbar: "#A9D1EA",
      navbutton: "white",
      background1: "#E5COC8",
      newPatient: "#d9b3ff",
      message: "#FDB7C2"
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
      icons: {
        color: colorScheme.navbutton,
        position: "flex",
        alignItems: "right",
      },
      mobilemenu: {
      },
      mobilemenuItem: {
        backgroundColor: "lightblue",
        color: "white",
        fontSize: 10,
        fontWeight: "bold"
      },
      newPatient: {
        backgroundColor: colorScheme.newPatient,
        color: "white",
        width: "55%",
        height: 50,
        fontSize: (!isDesktop) ? 10 : 20,
        fontWeight: "bold",
        margin: 10,
        borderRadius: 200,
        border: "3px outset #E1F0FA"
      },
      message: {
        backgroundColor: colorScheme.message,
        color: "white",
        width: "55%",
        height: 50,
        fontSize: (!isDesktop) ? 10 : 20,
        fontWeight: "bold",
        margin: 10,
        borderRadius: 200,
        border: "3px outset #F7E0E3"
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
      },
      messageTitle: {
        color: "#ff3399"
      },
      closeIcon: {
        color: "black"
      },
      success: {
        backgroundColor: "#8cd98c",
        alignItems: "center",
        color: 'white'
      }
    }

    //snackbar
    const [openSnack, setOpenSnack] = useState({
      message: false,
      consult: false
    });
    const closeMessageSnack = () => {
      setOpenSnack({ ...openSnack, message: false })
    }
    const messageSnack = () => {
      setOpenSnack({ ...openSnack, message: true })
    }
    const closeConsultSnack = () => {
      setOpenSnack({ ...openSnack, consult: false })
    }
    const consultSnack = () => {
      setOpenSnack({ ...openSnack, consult: true })
    }
  return (
    <div className="App">
      <AppBar position="fixed" style={(!isDesktop) ? style.appbarSmall : style.appbar}>
        <Toolbar>
          {(!isDesktop)

          // MOBILE APPBAR
          ? <>
              <Grid item>
                <IconButton>
                  <MenuIcon style={style.menuicon} onClick={menuOpen}/>
                </IconButton>
              </Grid>
              <Grid item xs="10" sm="10">
                
              </Grid>
              <Grid item>
                <IconButton>
                  <HomeIcon style={style.menuicon} onClick={e => openPage(e, scroll[0])}/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <FacebookIcon style={style.menuicon}/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <EmailIcon style={style.menuicon} onClick={messageOpen}/>
                </IconButton>
              </Grid>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={menuClose}
              >
                {mobilePage.map((data, index) => (
                    <MenuItem style={style.mobilemenuItem} onClick={e => openPage(e, mobileScroll[index + 1])}>{data}</MenuItem>
                ))}
              </Menu>
            </>
          : <>

          {/* PC NAVBAR  */}
          <Grid item md="12">
          {page.map((data, index) => (
            <Button style={style.navbutton} onClick={e => openPage(e, scroll[index + 1])}>{data}</Button>
          ))}
          </Grid>
          <Grid item style={style.icons}>
            <IconButton>
              <HomeIcon style={style.icons} onClick={e => openPage(e, scroll[0])}/>
            </IconButton>
          </Grid>
          <Grid item style={style.icons}>
            <IconButton>
              <FacebookIcon style={style.icons}/>
            </IconButton>
          </Grid>
          <Grid item style={style.icons}>
            <IconButton>
              <EmailIcon style={style.icons} onClick={messageOpen}/>
            </IconButton>
          </Grid>
          </>}
        </Toolbar>
      </AppBar>
      
      {/* BANNER */}
      <Grid container direction="row" alignItems="center" style={{ paddingTop: "3%" }}>
        <Grid item md="12" xs="12" ref={HomeRef}>
            <img src={lybLogo} style={style.banner}/>
        </Grid>

        {/* MODALS */}
        <Grid item md="6" xs="6">
          <Button onClick={handleOpen} style={style.newPatient}>Schedule a Consultation</Button>
          <Modal
              open={openForm}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              >
              <>
              <Card style={style.contactCard}>
                <ContactForm closeForm={handleClose} successConsult={consultSnack}/>
              </Card>
              </>
            </Modal>
        </Grid>
        <Grid item md="6" xs="6">
          <Button onClick={messageOpen} style={style.message}>Send Message</Button>
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

          {/* SNACKBARS */}
          <Snackbar
            open={openSnack.message}
            onClose={closeMessageSnack}
            autoHideDuration={5000}
          >
              <SnackbarContent message="Email Message Sent Successfully!" style={style.success}/>
          </Snackbar>
          <Snackbar
            open={openSnack.consult}
            onClose={closeConsultSnack}
            message="Consultation Request Sent Successfully!"
            autoHideDuration={5000}
          >
              <SnackbarContent message="Consultation Request Sent Successfully!" style={style.success} />
          </Snackbar>
        </Grid>

        {/* CONTENT  */}
        <Grid item md="12" xs="12" style={style.page}>
          <Home />
        </Grid>
        <Grid item md="12" xs="12" style={style.page}ref={AboutRef}>
          <About />
        </Grid>
        <Grid item md="12" xs="12" style={style.page}ref={ServicesRef}>
          <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid item md="4" xs="12" ref={PrenatalRef}>
              <Prenatal />
            </Grid>
            <Grid item md="4" xs="12" ref={BirthRef}>
              <Birth />
            </Grid>
            <Grid item md="4" xs="12" ref={NewbornRef}>
              <Newborn />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md="12" xs="12" style={{
      marginTop: "3%", marginLeft: 0, marginRight: 0
    }} ref={ContactRef}>
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
