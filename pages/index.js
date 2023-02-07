import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { homePage, personalItems, portfolioProjects } from "../siteInfo";
import NativeImage from "../components/general/NativeImage";
import BlockQuote from "../components/general/BlockQuote";
import ProjectPreview from "../components/home/ProjectPreview";
import ExpandingText from "../components/general/ExpandingText";
import SocialMediaIcons from "../components/general/SocialMediaIcons";
import {
    Favorite,
    MailOutline,
    OpenInNew,
    SubdirectoryArrowLeft,
} from "@mui/icons-material";
import SizedImage from "../components/general/SizedImage";
import CornerBorders from "../components/general/CornerBorders";
import SellingPoint from "../components/home/SellingPoint";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
            <Container maxWidth="xl">
                <Grid className="section" id="showcase" container spacing={4}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{ textAlign: "center" }}
                            >
                                Create a memory that will last a lifetime...
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "75ch",
                                    fontStyle: "italic",
                                    marginBottom: "1em",
                                }}
                            >
                                <strong>Flavor</strong> provides exceptional
                                service from simple drop offs to full service
                                events. Whether you are looking to feed a few
                                for a breakfast or luncheon or if you are
                                looking to make your next intimate event
                                exceptional, we are here to put together a
                                package that fits your needs perfectly!
                            </Typography>
                            <Favorite />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box
                className="section"
                sx={{ backgroundColor: theme.palette.primary.main }}
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Customized">
                                Working with the client directly and getting to
                                know their exact needs is something the Flavor
                                team loves to do. We learn more about your needs
                                then source foods and products based on your
                                preferences. Whether it&rsquo;s meats from local
                                Ragged Branch Farms or Produce from growers
                                along Skyline Drive, we strive to use the
                                freshest at every occasion.
                            </SellingPoint>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={0.75}
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Divider
                                    orientation="vertical"
                                    sx={{
                                        background:
                                            theme.palette.custom.lightMuted,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Thoroughness">
                                We make sure that every detail is covered for
                                your event by attending walk-throughs and
                                staying in contact through the event date on any
                                changes. Staffing your event thoroughly so that
                                each guest feels that they are taken care of on
                                a personal level.
                            </SellingPoint>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={0.75}
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Divider
                                    orientation="vertical"
                                    sx={{
                                        background:
                                            theme.palette.custom.lightMuted,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Experience">
                                Flavor has over 30 years combined experience in
                                the field of Catering and Hospitality. Countless
                                successful events from weddings and graduation
                                parties to corporate lunches and all day events,
                                we can guarantee our experience will make your
                                next event stress free and talked about for
                                years to come.
                            </SellingPoint>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "center",
                            padding: "10vw",
                            height: "100%",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", fontSize: "3rem" }}
                        >
                            Our Mission
                        </Typography>
                        <Box sx={{ width: "8rem" }}>
                            <Divider
                                sx={{
                                    background: theme.palette.custom.darkMuted,
                                }}
                            />
                        </Box>
                        <Typography>
                            At <strong>Flavor Exceptional Catering</strong>, the
                            success of your event is our number one priority. We
                            combine thoughtfully crafted food and service with
                            any celebration.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: "10vw" }}>
                        <NativeImage
                            image={homePage.image}
                            url={homePage.image.url}
                            maxSize={800}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
