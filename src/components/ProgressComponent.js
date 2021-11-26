import React from "react";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ProgressComponent = () => {
    return(
        <Box className="progress-component" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <CircularProgress />
        </Box>
    );
};