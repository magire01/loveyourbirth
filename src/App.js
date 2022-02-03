import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Grid, Button, Menu, MenuItem, Typography, IconButton, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';
import lybLogo from "./lybLogo3.png";
import Home from './components/Home';
import About from "./components/About";
import Assistant from './components/Assistant';
import Prenatal from './components/Prenatal';
import Birth from './components/Birth';
import Newborn from './components/Newborn';
import Resources from './components/Resources';
import Contact from './components/Contact';
import ConsultFormMain from './components/ConsultRequest/ConsultFormMain';
import MessageForm from './components/MessageForm';
import ConsultSnackbar from './components/Snackbar/ConsultSnackbar';
import MessageSnackbar from './components/Snackbar/MessageSnackbar';
import Quote from './components/Sections/Quote';
 
const App = () => {
//Nav Rendering for Smartphone vs Laptop
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

//Handle Scroll Nav
  const scrollToRef = (ref) => window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop-62
  })
  const HomeRef = useRef()
  const ContactRef = useRef()
  const AboutRef = useRef()
  const ServicesRef = useRef()
  const PrenatalRef = useRef();
  const BirthRef = useRef();
  const NewbornRef = useRef();
  const ResourceRef = useRef();

  const page = ["About", "Services", "Resources", "Contact"]
  const scroll = [HomeRef, AboutRef, ServicesRef, ResourceRef, ContactRef]
  const mobilePage = ["About", "Pregnancy", "Labor & Birth", "Postpartum & Newborn", "Resources", "Contact"]
  const mobileScroll = [HomeRef, AboutRef, PrenatalRef, BirthRef, NewbornRef, ResourceRef, ContactRef]

  const openPage = (e, page) => {
    e.preventDefault();
    scrollToRef(page);
    menuClose();
  }

//Handle Open Form and Message
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
      consultButton: "#d9b3ff",
      messageButton: "#FDB7C2",
      subheader: "#d9b3ff"
    }
//style
    const style = {
      banner: {
        width: (!isDesktop) ? "70%" : "32%",
        height: "auto",
        marginTop: (!isDesktop) ? 40 : 15
      },
      menuItem: {
        backGroundColor: "#ff3399",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        margin: 20
      },
      mobilemenuItem: {
        backgroundColor: "#ff3399",
        color: "white",
        fontSize: 10,
        fontWeight: "bold"
      },
      consultButton: {
        backgroundColor: colorScheme.consultButton,
        color: "white",
        width: (!isDesktop) ? 120 : "30%",
        height: (!isDesktop) ? 35 : 50,
        fontSize: (!isDesktop) ? 8 : 14,
        fontWeight: "bold",
        marginLeft: (!isDesktop) ? 10 : "40%",
        borderRadius: 200,
        border: "3px outset #E1F0FA"
      },
      messageButton: {
        backgroundColor: colorScheme.messageButton,
        color: "white",
        width: (!isDesktop) ? 120 : "30%",
        height: (!isDesktop) ? 35 : 50,
        fontSize: (!isDesktop) ? 10 : 16,
        fontWeight: "bold",
        marginRight: (!isDesktop) ? 10 : "40%",
        borderRadius: 200,
        border: "3px outset #F7E0E3"
      },
      subheader: {
        fontSize: 20,
        backgroundColor: colorScheme.subheader,
        color: "white",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 4
      },
      heart: {
        fontSize: 25
      }
    }

//Handle Snackbars
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
{/* APPBAR */}
      <AppBar position="fixed" elevation={5} style={{ height: (!isDesktop) ? 50 : 60, position: "fixed", backgroundColor: "#A9D1EA" }}>
        <Toolbar> 
          <Grid container alignItems="center" justifyContent="flex-start">
            <Grid item md={1} xs={1}>
              <IconButton onClick={menuOpen}>
                <MenuIcon className={"menuIcon"}/>
              </IconButton>
            </Grid>
            <Grid item md={8} xs={5}> 
              <Typography component="div" style={{ color: "white", fontWeight: "bold", fontSize: (!isDesktop) ? 10 : 15 }}>Currently Only Serving Kentucky</Typography>
            </Grid>
            <Grid item md={1} xs={2}>
              <IconButton onClick={e => openPage(e, scroll[0])}>
                <HomeIcon className={"iconFont"}/>
              </IconButton>
            </Grid>
            <Grid item md={1} xs={2}>
              <a href="https://www.facebook.com/Loveyourbirthmidwifery/" target="_blank" style={{ textDecoration: "none" }}>
                <IconButton className={"topIcon"}>
                  <FacebookIcon className={"iconFont"}/>
                </IconButton>
              </a>
            </Grid>
            <Grid item md={1} xs={2}>
              <IconButton onClick={messageOpen} className={"topIcon"}>
                <EmailIcon className={"iconFont"}/>
              </IconButton>
            </Grid>
  {/* NAV MENU */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={menuClose}
              background="transparent"
              style={{ opacity: 0.7 }}
            >
              {(!isDesktop) 
              ? mobilePage.map((data, index) => (
                <MenuItem style={style.mobilemenuItem} onClick={e => openPage(e, mobileScroll[index + 1])}>{data}</MenuItem>
              ))
              : page.map((data, index) => (
                  <MenuItem style={style.menuItem} onClick={e => openPage(e, scroll[index + 1])}>{data}</MenuItem>
              ))}
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    
      <Grid container direction="row" alignItems="center" style={{ paddingTop: "3%" }}>
{/* BANNER */}
        <Grid item md="12" xs="12" ref={HomeRef}>
            <img src={lybLogo} style={style.banner}/>
        </Grid>
{/* CONSULT FORM */}
        <Grid item md="6" xs="6">
          <Button onClick={handleOpen} style={style.consultButton}>Schedule a Consultation</Button>
            <ConsultFormMain 
            openForm={openForm}
            handleClose={handleClose} 
            successConsult={consultSnack}/>
        </Grid>
{/* SEND MESSAGE */}
        <Grid item md="6" xs="6">
          <Button onClick={messageOpen} style={style.messageButton}>Send Message</Button>
          <MessageForm
          openMessage={openMessage}
          messageClose={messageClose}
          closeMessage={messageClose} 
          successMessage={messageSnack}/>
{/* SNACKBARS */}
          <MessageSnackbar
            openMessageSnack={openSnack.message}
            closeMessageSnack={closeMessageSnack}
          />
          <ConsultSnackbar
            openConsultSnack={openSnack.consult}
            closeConsultSnack={closeConsultSnack}
          />
        </Grid>
{/* QUOTE */}
        <Grid item md="12" xs="12" className={"quoteMargin"}>
            <Quote />
        </Grid>
        <Grid item md="12" xs="12">
          <FavoriteIcon style={style.heart} className={"heartIcon"} />
        </Grid>
{/* CONTENT  */}
  {/* HOME */}
          <Grid item md="12" xs="12">
            <Home />
          </Grid>
          <Grid item md="12" xs="12">
            <FavoriteIcon style={style.heart} className={"heartIcon"} />
          </Grid>
  {/* ABOUT */}
          <Grid item ref={AboutRef}>
            <Typography style={style.subheader}>Meet the Midwife</Typography>
            <About />
          </Grid>
  {/* ASSISTANT */}
          <Grid item>
            <Typography style={style.subheader}>Meet the Birth Assistant</Typography>
            <Assistant />
          </Grid>
  {/* SERVICES */}
          <Grid item md="12" xs="12" ref={ServicesRef}>
              <Typography style={style.subheader}>Services</Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item lg="4" md="12" sm="12" xs="12" ref={PrenatalRef}>
              <FavoriteIcon style={style.heart} className={"heartIcon"} />
              <Prenatal />
            </Grid>
            <Grid item lg="4" md="12" sm="12" xs="12" ref={BirthRef}>
              <FavoriteIcon style={style.heart} className={"heartIcon"} />
              <Birth />
            </Grid>
            <Grid item lg="4" md="12" sm="12" xs="12" ref={NewbornRef}>
              <FavoriteIcon style={style.heart} className={"heartIcon"} />
              <Newborn />
            </Grid>
          </Grid>
          <Grid item md="12" xs="12">
            <FavoriteIcon style={style.heart} className={"heartIcon"} />
          </Grid>
  {/* RESOURCES */}
        <Grid item md="12" xs="12" style={style.page} ref={ResourceRef}  style={{ marginBottom: (!isDesktop) ? "5%" : "5%", marginLeft: 0, marginRight: 0}}>
          <Typography style={style.subheader}>Resources</Typography>
          <div style={{ paddingTop: (!isDesktop) ? 20 : 0 }}>
            <Resources />
          </div>
        </Grid>
  {/* CONTACT */}
        <Grid item md="12" xs="12" className={"contactView"} ref={ContactRef}>
          <Contact openMessage={messageOpen} openConsult={handleOpen}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
