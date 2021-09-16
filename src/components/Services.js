import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const Services = () => {
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
        <Grid container direction="row" alignItems="center" justifyContent="center">
            {/* <Grid item md="12" xs="12">
                <Typography style={style.title}>Our Services</Typography>
            </Grid> */}
            <Grid item md="4" xs="12">
                <div style={style.serviceCard}>
                <FavoriteIcon style={style.heart}/>
                <Typography variant="subtitle1" style={style.subtitle}>Pregnancy</Typography>
                <Typography>The midwifery model of care emphasises supporting normal physiology, encouraging shared decision making, and providing holistic, family-centered care. A trusting compassionate relationship with your midwife is vital for safe and effective care in your home. As long as no complications arise during your pregnancy, I will follow the standard recommended schedule for antenatal visits: every 4 weeks until 28 weeks, every 2 weeks until 36 weeks, and every week until birth. Besides the exception of any ultrasounds, I will have the ability to complete any tests you may need. I encourage your family and support systems to be involved in your care as this is a joyous time to bond with the anticipated arrival of your precious little one. I will continue to assess both you and your baby’s health to determine if continuing care in the home is safe and I will notify you of anything I am concerned about and we will discuss a potential transfer of care. Midwives are experts in normal, so it is my duty to determine if anything is falling outside of normal. Thankfully, most pregnancies are healthy and don’t need any interventions other than a watchful eye. It will be your responsibility that you aim for utmost health  and I will offer you physical and emotional support and guidance to help facilitate a healthy and low-risk pregnancy. </Typography>
                </div>
            </Grid>
            <Grid item md="4" xs="12">
                <div style={style.serviceCard}>
                <FavoriteIcon style={style.heart}/>
                <Typography variant="subtitle1" style={style.subtitle}>Labor & Birth</Typography>
                <Typography>I am confident that you will be knowledgeable about the labor process as we will discuss this as you near the end of your pregnancy. When you call during labor, I will come to your home and do one baseline cervical exam to determine if I need to stay or go. Once it’s determined you are in active labor I will remain by your side until birth and 2-3 hours postpartum. I will have a birth assistant who is also certified in neonatal resuscitation and adult CPR. I will bring all the supplies and skills needed to help facilitate a physiologic birth as well as initiate any interventions needed if complications arise. Just like during pregnancy, I will continue to assess the health of you and your baby and notify you of any concerns I may have. If I believe it is safer for you to transfer your care to the hospital, my hope is that you will trust my recommendation. In a low-risk pregnancy and labor, evidence shows that birthing at home is just as safe as in the hospital. Labor and birth at home is very beneficial because you are in your safe space, able to move freely, eat and drink as you please, and able to follow your intuition of what feels best for you. I will be there as a guiding hand, but ultimately you are in charge of your birth experience. </Typography>
                </div>
            </Grid>
            <Grid item md="4" xs="12">
                <div style={style.serviceCard}>
                <FavoriteIcon style={style.heart}/>
                <Typography variant="subtitle1" style={style.subtitle}>Postpartum & Newborn</Typography>
                <Typography>During the immediate postpartum period, I will be supporting the golden hour. Skin to skin, bonding, and breastfeeding will be vital not only for the well-being of your baby, but to help protect you from postpartum hemorrhage. After determining that the health of both you and your baby are stable, I will only be a watchful eye during this important hour. I will stay with you for 2-3 hours after birth to make sure you and your baby remain healthy and feel confident in taking care of yourself and your baby. Just as mentioned before, if there are any concerns I will communicate them with you. I will be able to provide postpartum and newborn visits in your home at 1-2 days, 1 week, 2 weeks, and 4 weeks. I will be able to provide a final 6 week postpartum visit, however, my scope of practice only allows me to care for newborns up to 28 days, so I will help you facilitate a transfer of care to your chosen pediatric provider. </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Services;