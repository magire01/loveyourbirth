import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Grid, Button, Typography, AppBar, Toolbar } from "@material-ui/core";
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
import NavMenu from './components/NavMenu';
import ToolbarItem from './components/ToolbarItem';
import MessageModal from './components/MessageModal';
import AlertSnackbar from './components/AlertSnackbar';
 
const App = () => {
  //Scroll Nav
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
  
  const scroll = [HomeRef, AboutRef, ServicesRef, ResourceRef, ContactRef]
  const mobileScroll = [HomeRef, AboutRef, PrenatalRef, BirthRef, NewbornRef, ResourceRef, ContactRef]

  const openPage = (e, number, isDesktop) => {
    e.preventDefault()
    scrollToRef(isDesktop ? scroll[number] : mobileScroll[number])
    menuClose()
  }

  //Nav Rendering for Smartphone vs Laptop
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
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
  const [openSnack, setOpenSnack] = useState({
    message: null,
    consult: null
  })

  //mobile menu
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };

  //style
  const style = {
    banner: {
      width: (!isDesktop) ? "70%" : "32%",
      height: "auto",
      marginTop: (!isDesktop) ? 40 : 15
    },
    subheader: {
      fontSize: 20,
      backgroundColor: "#d9b3ff",
      color: "white",
      fontWeight: "bold",
      fontStyle: "italic",
      padding: 4
    },
    quoteFont: {
      fontSize: (!isDesktop) ? 12 : 18
    },
    authorFont: {
      fontSize: (!isDesktop) ? 12 : 18,
      fontWeight: "bold"
    },
    heart: {
      fontSize: 25
    }
}

  return (
    <div className="App">
{/* APPBAR */}
      <AppBar position="fixed" elevation={5} style={{ height: (!isDesktop) ? 50 : 60, position: "fixed", backgroundColor: "#A9D1EA" }}>
        <Toolbar> 
          <Grid container alignItems="center" justifyContent="flex-start">
{/* TOOLBAR */}
            <ToolbarItem name="menu" menuOpen={(e) => menuOpen(e)} md={1} xs={1}/>
            <ToolbarItem name="alert" md={8} xs={5}/>
            <ToolbarItem name="home" md={1} xs={2} openPage={(e, number, isDesktop) => openPage(e, 0, isDesktop)}/>
            <ToolbarItem name="facebook" md={1} xs={2} />
            <ToolbarItem name="messageOpen" md={1} xs={2} messageOpen={() => setOpenMessage(true)}/>
{/* NAV MENU */}
            <NavMenu openPage={(e, number, isDesktop) => openPage(e, number, isDesktop)} anchorEl={anchorEl} menuClose={() => menuClose} />
          </Grid>
        </Toolbar>
      </AppBar>
    
      <Grid container direction="row" alignItems="center" style={{ paddingTop: "3%" }}>
{/* BANNER */}
        <Grid item md="12" xs="12" ref={HomeRef}>
            <img src={lybLogo} style={style.banner}/>
        </Grid>
{/* MODALS */}
        <MessageModal 
          name="Schedule a Consultation" 
          isConsult={true} 
          openForm={openForm} 
          handleOpen={() => setOpenForm(true)} 
          handleClose={() => setOpenForm(false)} 
          consultSnack={() => setOpenSnack({ ...openSnack, consult: true })}

        />
        <MessageModal 
          name="Send Message" 
          isConsult={false} 
          openMessage={openMessage} 
          messageOpen={() => setOpenMessage(true)} 
          messageClose={() => setOpenMessage(false)}
          messageSnack={() => setOpenSnack({ ...openSnack, message: true})}
        />
{/* SNACKBARS */}
        <AlertSnackbar 
          open={openSnack.message} onClose={() => setOpenSnack({ ...openSnack, message: null })} autoHideDuration={5000} 
          message="Email Message Sent Successfully!" 
        />
        <AlertSnackbar 
          open={openSnack.consult} onClose={() => setOpenSnack({ ...openSnack, consult: null })} autoHideDuration={5000} 
          message="Consultation Request Sent Successfully!"
        />
{/* QUOTE */}
        <Grid item md="12" xs="12" className={"quoteMargin"}>
            <Typography style={style.quoteFont} className={"quoteFont"}>You are a midwife, assisting at someone else’s birth. Do good without show or fuss. Facilitate what is happening rather than what you think ought to be happening. If you must take the lead, lead so that the mother is helped, yet still free and in charge. When the baby is born, the mother will rightly say, 'We did it ourselves!'</Typography>
            <Typography style={style.authorFont} className={"authorFont"}>Tao Te Ching</Typography>
        </Grid>
        <Grid item md="12" xs="12">
          <FavoriteIcon style={style.heart} className={"heartIcon"} />
        </Grid>
{/* CONTENT  */}
    {/* HOME */}
          <Home />
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
          <Contact openMessage={() => setOpenMessage(true)} openConsult={() => setOpenForm(true)}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;