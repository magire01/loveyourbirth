import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const Prenatal = () => {
    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    //Colors
    const colorScheme = {
        serviceCard: "white",
        title: "#E68FAE",
        font: "black",
    }
    //Style
    const style = {
        serviceCard: {
            backgroundColor: colorScheme.serviceCard,
            color: "black",
            margin: "1%",
            padding: "5%",
            height: (!isDesktop) ? "auto" : 600,
        },
        title: {
            borderBottom: "1px dashed black"
        },
        heart: {
            color: "#ff3399",
            fontSize: 30
        },
        subtitle: {
            color: colorScheme.title,
            fontWeight: "bold",
            fontSize: 25
        }
    }

    return (
        <div style={style.serviceCard}>
            <FavoriteIcon style={style.heart}/>
            <Typography variant="subtitle1" style={style.subtitle}>Pregnancy</Typography>
            <Typography>The midwifery model of care emphasises supporting normal physiology, encouraging shared decision making, and providing holistic, family-centered care. A trusting relationship with your midwife is vital for safe and effective care in your home. We will build that relationship during reguarly scheduled visits throughout your pregnancy. With the exception of any ultrasounds, I will have the ability to complete any tests you may need right in your home. I encourage your family and friends to be involved in your care as this is a joyous time to bond with the anticipated arrival of your little one. I will continue to assess both you and your baby’s health to determine if continuing care in the home is safe. If I have any concerns, we will discuss them together and decide if a transfer of care is necessary. Midwives are experts in normal, so it is my duty to determine if anything is abnormal. Thankfully, most pregnancies are healthy and don’t require any intervention other than a watchful eye. It will be your responsibility that you aim for utmost health. I will offer you physical and emotional support to help facilitate a healthy and low-risk pregnancy. </Typography>
        </div>
    )
}

export default Prenatal;