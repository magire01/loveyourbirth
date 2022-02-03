import React, { useState, useEffect } from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

const ConsultSnackbar = (props) => {

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
        success: {
            backgroundColor: "#8cd98c",
            alignItems: "center",
            color: 'white'
      }
    }
    
    return (
        <Snackbar
            open={props.openConsultSnack}
            onClose={props.closeConsultSnack}
            message="Consultation Request Sent Successfully!"
            autoHideDuration={5000}
          >
              <SnackbarContent message="Consultation Request Sent Successfully!" style={style.success} />
          </Snackbar>
    )
}

export default ConsultSnackbar;