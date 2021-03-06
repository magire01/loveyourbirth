import React from "react";
import "./Service.css"
import { Typography } from "@material-ui/core";
import '@fontsource/roboto';

const Birth = () => {
    //Style
    const style = {
        subTitle: {
            fontWeight: "bold", 
            fontSize: 25
        }
    }

    return (
        <div style={style.serviceCard}>
            <Typography className={"subTitle"} style={style.subTitle}>Labor & Birth</Typography>
            <Typography className={"text"}>As you near the end of your pregnancy, I am confident that you will be knowledgeable about the labor process. Once you are in active labor, I will remain by your side until birth and 2-3 hours postpartum. A birth assistant will accompany me who is also certified in neonatal resuscitation and adult CPR. I will bring all the supplies and skills needed to handle potential complications. Just like during pregnancy, I will continue to assess the health of you and your baby and notify you of any concerns I may have. If I believe it is safer for you to transfer your care to the hospital, my hope is that you will trust my recommendation. In a low-risk pregnancy and labor, evidence shows that birthing at home with a skilled attendant is just as safe as in the hospital. Labor and birth at home is very beneficial because you are in your safe space, able to move freely, eat and drink as you please, and truly follow your maternal instincts. I will be there as a guiding hand, but ultimately you are in charge of your birth experience. </Typography>
        </div>
    )
}

export default Birth;