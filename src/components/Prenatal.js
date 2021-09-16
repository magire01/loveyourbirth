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
            <Typography>The midwifery model of care emphasises supporting normal physiology, encouraging shared decision making, and providing holistic, family-centered care. A trusting compassionate relationship with your midwife is vital for safe and effective care in your home. As long as no complications arise during your pregnancy, I will follow the standard recommended schedule for antenatal visits: every 4 weeks until 28 weeks, every 2 weeks until 36 weeks, and every week until birth. Besides the exception of any ultrasounds, I will have the ability to complete any tests you may need. I encourage your family and support systems to be involved in your care as this is a joyous time to bond with the anticipated arrival of your precious little one. I will continue to assess both you and your baby’s health to determine if continuing care in the home is safe and I will notify you of anything I am concerned about and we will discuss a potential transfer of care. Midwives are experts in normal, so it is my duty to determine if anything is falling outside of normal. Thankfully, most pregnancies are healthy and don’t need any interventions other than a watchful eye. It will be your responsibility that you aim for utmost health  and I will offer you physical and emotional support and guidance to help facilitate a healthy and low-risk pregnancy. </Typography>
        </div>
    )
}

export default Prenatal;