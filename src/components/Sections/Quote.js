import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import '@fontsource/roboto';
import './Quote.css';

const Quote = () => {

    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    //Style
    const style = {
        quoteFont: {
            fontSize: (!isDesktop) ? 12 : 18
        },
        authorFont: {
            fontSize: (!isDesktop) ? 12 : 18,
            fontWeight: "bold"
        }
    }
    return (
        <>
            <Typography style={style.quoteFont} className={"quoteFont"}>You are a midwife, assisting at someone else’s birth. Do good without show or fuss. Facilitate what is happening rather than what you think ought to be happening. If you must take the lead, lead so that the mother is helped, yet still free and in charge. When the baby is born, the mother will rightly say, 'We did it ourselves!'</Typography>
            <Typography style={style.authorFont} className={"authorFont"}>Tao Te Ching</Typography>
        </>
    )
}

export default Quote;