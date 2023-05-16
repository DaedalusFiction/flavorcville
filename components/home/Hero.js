import { ArrowRightAlt } from "@mui/icons-material";
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
                                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/newHero.webp)",
                            backgroundSize: "cover",
                            backgroundPosition: { xs: "0% 0%", md: "30% 50%" },
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            background: {
                                xs: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/Dinner_Photo_Header.webp)",
                                md: theme.palette.secondary.main,
                            },
                            padding: "20vh 4rem 20vh 4rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <Box
                            sx={{
                                transform: "scaleY(-1)",
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            <SizedImage
                                image={hero.imageTwo}
                                height={100}
                                width={250}
                            />
                        </Box>
                        <Typography
                            variant="h1"
                            sx={{
                                color: { xs: "white", md: "black" },
                                maxWidth: "15ch",
                                textAlign: "center",
                            }}
                        >
                            Exceptional Catering
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Alex Brush",
                                color: {
                                    xs: "white",
                                    md: theme.palette.custom.dark,
                                },
                                textAlign: "center",
                                fontSize: "2.5rem",
                            }}
                        >
                            for
                        </Typography>

                        <HeroScroller />

                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                                gap: "1em",
                                justifyContent: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    lineHeight: "1.25em",
                                    color: "white",
                                }}
                            >
                                <Link href="/menus">View Menus</Link>
                            </Typography>
                            <Typography
                                sx={{
                                    lineHeight: "1.25em",
                                    color: "white",
                                }}
                            >
                                <Link href="/contact">Inquire Here</Link>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: "1em",
                                justifyContent: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <Link href="/menus">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    // endIcon={<ArrowRightAlt />}
                                >
                                    View Menus
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    // endIcon={<ArrowRightAlt />}
                                >
                                    Inquire Here
                                </Button>
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <SizedImage
                                image={hero.imageTwo}
                                height={100}
                                width={250}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
