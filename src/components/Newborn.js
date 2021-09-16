import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const Newborn = () => {
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
            <Typography variant="subtitle1" style={style.subtitle}>Postpartum & Newborn</Typography>
            <Typography>During the immediate postpartum period, I will be supporting the golden hour. Skin to skin, bonding, and breastfeeding will be vital not only for the well-being of your baby, but to help protect you from postpartum hemorrhage. After determining that the health of both you and your baby are stable, I will only be a watchful eye during this important hour. I will stay with you for 2-3 hours after birth to make sure you and your baby remain healthy and feel confident in taking care of yourself and your baby. Just as mentioned before, if there are any concerns I will communicate them with you. I will be able to provide postpartum and newborn visits in your home at 1-2 days, 1 week, 2 weeks, and 4 weeks. I will be able to provide a final 6 week postpartum visit, however, my scope of practice only allows me to care for newborns up to 28 days, so I will help you facilitate a transfer of care to your chosen pediatric provider. </Typography>
        </div>
    )
}

export default Newborn;