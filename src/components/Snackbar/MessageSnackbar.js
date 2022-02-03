import React, { useState, useEffect } from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

const MessageSnackbar = (props) => {

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
            open={props.openMessageSnack}
            onClose={props.closeMessageSnack}
            autoHideDuration={5000}
          >
              <SnackbarContent message="Email Message Sent Successfully!" style={style.success}/>
          </Snackbar>
    )
}

export default MessageSnackbar;