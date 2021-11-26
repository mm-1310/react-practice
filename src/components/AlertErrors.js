import React from "react";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const AlertErrors = (props) => {
    //display data from props if not null
    return(
        <Alert className="error-component" severity="error" style={{marginTop: 25, marginLeft: 15, maxWidth: 500}}>
            <AlertTitle>{props?.code}</AlertTitle>
            {props?.message}
        </Alert>
    );
};