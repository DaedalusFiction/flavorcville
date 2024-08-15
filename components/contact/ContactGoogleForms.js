import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ContactGoogleForms = () => {
    return (
        <div>
            <Typography
                variant="h6"
                sx={{
                    textAlign: "center",
                    fontWeight: "600",
                }}
            >
                Inquirires
            </Typography>
            <br />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}
                >
                    <Button
                        variant="outlined"
                        href="https://forms.gle/CMS12Y1VKBkfs8UF7"
                        target="_BLANK"
                        rel="noreferrer"
                    >
                        Weddings
                    </Button>
                    <Button
                        variant="outlined"
                        href="https://forms.gle/JFjbRQst219B4JrG8"
                        target="_BLANK"
                        rel="noreferrer"
                    >
                        Corporate and Social
                    </Button>
                    <Button
                        variant="outlined"
                        href="https://forms.gle/mhZXiyM9poXfNHpz5"
                        target="_BLANK"
                        rel="noreferrer"
                    >
                        Sorority and Fraternity
                    </Button>
                    <Button
                        variant="outlined"
                        href="https://forms.gle/moosRocn5F3a6NzV8"
                        target="_BLANK"
                        rel="noreferrer"
                    >
                        Join the Flavor Team
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default ContactGoogleForms;
