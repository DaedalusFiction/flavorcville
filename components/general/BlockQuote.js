import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlockQuote = ({ children, attribution }) => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "3rem 0",
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <Typography
                        sx={{
                            position: "absolute",
                            top: ".25em",
                            left: { xs: "-.1em", md: "-.2em" },
                            fontSize: "30rem",
                            opacity: "20%",
                            lineHeight: "0",
                            // fontFamily: "EB Garamond",
                        }}
                    >
                        &ldquo;
                    </Typography>
                    <Typography
                        sx={{
                            fontStyle: "italic",
                            fontSize: "1.5rem",
                            lineHeight: "1.5em",
                        }}
                    >
                        {children}
                    </Typography>
                    <Typography sx={{ textAlign: "end" }}>
                        {attribution}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default BlockQuote;
