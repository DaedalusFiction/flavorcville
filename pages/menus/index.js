import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import { menus } from "../../siteInfo";

const index = () => {
    return (
        <Container maxWidth="xl">
            <Box className="section">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <NativeImage
                        image={menus.imageThree}
                        url={menus.imageThree.url}
                        maxSize={800}
                    />
                </Box>
            </Box>
            <Typography variant="h1" sx={{ textAlign: "center" }}>
                Sample Menus
            </Typography>
        </Container>
    );
};

export default index;
