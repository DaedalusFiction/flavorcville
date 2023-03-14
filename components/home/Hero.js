import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { hero } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import SizedImage from "../general/SizedImage";
import HeroScroller from "./HeroScroller";

const Hero = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            height: "100%",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/hero.webp)",
                            backgroundSize: "cover",
                            backgroundPosition: { xs: "0% 0%", md: "40% 0%" },
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            background: {
                                xs: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/lunch.webp)",
                                md: theme.palette.secondary.main,
                            },
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
                                fontFamily: "Alex Brush",
                                color: theme.palette.custom.light,
                                textAlign: "center",
                                fontSize: "2.5rem",
                            }}
                        >
                            for
                        </Typography>

                        <HeroScroller />

                        <Box
                            sx={{
                                display: "flex",
                                gap: "1em",
                                justifyContent: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <Link href="/contact">
                                <Button variant="contained" color="primary">
                                    View Menus
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="contained" color="primary">
                                    Book Now
                                </Button>
                            </Link>
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
