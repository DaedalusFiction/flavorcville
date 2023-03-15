import { Box } from "@mui/system";
import React from "react";

const Stripes = () => {
    return (
        <Box
            sx={{
                padding: "3rem 0",
                background:
                    "repeating-linear-gradient( 45deg, transparent, transparent 5px, #A0AFA4 5px, #A0AFA4 10px)",
            }}
        />
    );
};

export default Stripes;
