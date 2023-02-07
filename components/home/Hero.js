import { ArrowCircleDown, ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import { hero } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import NativeImage from "../general/NativeImage";
import SizedImage from "../general/SizedImage";

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
                            padding: "20vh 4rem 20vh 4rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <Box sx={{ transform: "scaleY(-1)" }}>
                            <SizedImage
                                image={hero.imageTwo}
                                height={100}
                                width={250}
                            />
                        </Box>
                        <Typography
                            variant="h1"
                            sx={{
                                color: theme.palette.custom.light,
                                textAlign: "center",
                            }}
                        >
                            Exceptional Catering
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Satisfy",
                                color: theme.palette.custom.light,
                                textAlign: "center",
                            }}
                        >
                            for
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                color: theme.palette.custom.light,
                                textAlign: "center",
                            }}
                        >
                            Exceptional Events
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1em",
                                justifyContent: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <Button variant="contained" color="primary">
                                View Menu
                            </Button>
                            <Button variant="contained" color="primary">
                                Book Now
                            </Button>
                        </Box>
                        <SizedImage
                            image={hero.imageTwo}
                            height={100}
                            width={250}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
