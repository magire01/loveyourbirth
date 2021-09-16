import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const Birth = () => {
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
            <Typography variant="subtitle1" style={style.subtitle}>Labor & Birth</Typography>
            <Typography>I am confident that you will be knowledgeable about the labor process as we will discuss this as you near the end of your pregnancy. When you call during labor, I will come to your home and do one baseline cervical exam to determine if I need to stay or go. Once it’s determined you are in active labor I will remain by your side until birth and 2-3 hours postpartum. I will have a birth assistant who is also certified in neonatal resuscitation and adult CPR. I will bring all the supplies and skills needed to help facilitate a physiologic birth as well as initiate any interventions needed if complications arise. Just like during pregnancy, I will continue to assess the health of you and your baby and notify you of any concerns I may have. If I believe it is safer for you to transfer your care to the hospital, my hope is that you will trust my recommendation. In a low-risk pregnancy and labor, evidence shows that birthing at home is just as safe as in the hospital. Labor and birth at home is very beneficial because you are in your safe space, able to move freely, eat and drink as you please, and able to follow your intuition of what feels best for you. I will be there as a guiding hand, but ultimately you are in charge of your birth experience. </Typography>
        </div>
    )
}

export default Birth;