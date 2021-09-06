import './App.css';
import React, { useState, useRef } from "react";
import { Paper, Grid, Button, Drawer, List, ListItem, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import '@fontsource/roboto';
import lybLogo from "./lybLogo2.png";

import About from "./components/About";
import Prenatal from './components/Prenatal';
import Labor from './components/Labor';
import Newborn from './components/Newborn';
import Contact from './components/Contact';


function App() {

  const [openNav, setOpenNav] = useState(false);
  const [pageSelect, setPageSelect] = useState("home")

  const openDrawer = (e) => {
    e.preventDefault();
    setOpenNav(!openNav);
    console.log(openNav);
  }

  const openPage = (e, page) => {
    e.preventDefault();
    setPageSelect(page);
    setOpenNav(false)
    console.log(page);
  }

  const page = ["Contact", "About", "Prenatal", "Labor and Birth", "Newborn"]
  const pageColor = ["#FFD4FD", "#FAACF7", "#FC8DF8", "#FC6AF7", "#FF1CF7", "#FFDEFE" ]
  const borderThick = "10px"
  const style = {
    banner: {
      width: "65%",
      height: "auto"
    },
    page: {
      marginTop: "5%",
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
    }
  }
  return (
    <div className="App">
      <Grid container style={{ paddingTop: "8%" }}>
        <Grid md="1" xs="1">
          <IconButton onClick={openDrawer}>
              <MenuIcon style={{ position: "fixed", backgroundColor: "pink" }}/>
          </IconButton>
        </Grid>

        <Grid md="10" xs="10">
          <Grid item md="12" xs="12">
            <div>
              <img src={lybLogo} style={style.banner}/>
            </div>
          </Grid>
          
          <Grid item md="12" xs="12" style={style.page}>
            <Paper style={style.page1}>
              <About />
            </Paper>
          </Grid>
          <Grid item md="12" xs="12" style={style.page}>
            <Paper style={style.page2}>
              <Prenatal />
            </Paper>
          </Grid>
          <Grid item md="12" xs="12" style={style.page}>
            <Paper style={style.page3}>
              <Labor />
            </Paper>
          </Grid>
          <Grid item md="12" xs="12" style={style.page}>
            <Paper style={style.page4}>
              <Newborn />
            </Paper>
          </Grid>
          <Grid item md="12" xs="12" style={style.page}>
            <Paper style={style.page5}>
              <Contact />
            </Paper>
          </Grid>
        </Grid>

        <Grid md="1" xs="1">
        </Grid>
      </Grid>
      
      
      <Drawer anchor="left" open={openNav}>
        <Grid container style={{ paddingTop: "20%", backgroundColor: "lightPink" }}>
          <List>
            <IconButton onClick={openDrawer}>
                <ChevronLeftIcon />
            </IconButton>
            {page.map((item) => (
              <ListItem> 
                <Button onClick={e => openPage(e, item)}>{item}</Button>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Drawer>
    </div>
  );
}

export default App;
