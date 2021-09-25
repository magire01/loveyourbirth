import React from "react";
import "./Service.css";
import { Typography } from "@material-ui/core";
import '@fontsource/roboto';

const Newborn = () => {
    //Style
    const style = {
        subTitle: {
            fontWeight: "bold", 
            fontSize: 25
        }
    }

    return (
        <div style={style.serviceCard}>
            <Typography className={"subTitle"} style={style.subTitle}>Postpartum & Newborn</Typography>
            <Typography className={"text"}>During the immediate postpartum period, I will be supporting the golden hour. Skin to skin, bonding, and breastfeeding will be vital not only for the well-being of your baby, but to help protect you from postpartum hemorrhage. After determining that you and your baby are well, I will only be a watchful eye during this important hour. I will stay with you for 2-3 hours after birth and I will make sure you feel confident in taking care of yourself and your baby before I leave your home. Just as mentioned before, if there are any concerns I will communicate them with you. I will be able to provide postpartum and newborn visits in your home at 1-2 days, 1 week, 2 weeks, and 4 weeks. I will also provide a final 6 week postpartum visit. Since my scope of practice only allows me to care for newborns up to 28 days, I will help facilitate a transfer of care to your chosen pediatric provider. Breastfeeding assistance will also be available as needed. </Typography>
        </div>
    )
}

export default Newborn;