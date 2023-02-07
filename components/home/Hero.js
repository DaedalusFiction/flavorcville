import { ArrowCircleDown, ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/stock1.webp)",
                backgroundSize: "cover",
                backgroundPosition: { xs: "50% 0%", md: "0% 0%" },
            }}
        >
            <Grid container>
                <Grid item xs={12} md={7}></Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.main,
                            padding: "40vh 4rem 20vh 4rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: theme.palette.custom.light,
                                textAlign: "center",
                            }}
                        >
                            Exceptional Catering for Exceptional Events
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1em",
                                justifyContent: "center",
                            }}
                        >
                            <Button variant="contained" color="primary">
                                View Menu
                            </Button>
                            <Button variant="contained" color="primary">
                                Book Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
