import { Box, Button, Divider, Typography } from "@mui/material";
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
import Link from "next/link";
import MenuPreview from "../components/home/MenuPreview";
import VerticalDivider from "../components/layout/VerticalDivider";

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
                                Create memories that will last a lifetime
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "75ch",
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
                            <SellingPoint title="Responsive">
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

                        <VerticalDivider
                            width={0.75}
                            color={theme.palette.custom.lightMuted}
                        />
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Attentive">
                                We make sure that every detail is covered for
                                your event by attending walk-throughs and
                                staying in contact through the event date on any
                                changes. Staffing your event thoroughly so that
                                each guest feels that they are taken care of on
                                a personal level.
                            </SellingPoint>
                        </Grid>
                        <VerticalDivider
                            width={0.75}
                            color={theme.palette.custom.lightMuted}
                        />
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Experienced">
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
            <Box sx={{ background: theme.palette.secondary.main }}>
                <Box
                    sx={{
                        background: "white",
                        clipPath: "ellipse(200% 78% at 10% 20%)",
                    }}
                >
                    <Container className="section">
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        alignItems: "center",
                                        padding: "2rem",
                                        height: "100%",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "4rem",
                                        }}
                                    >
                                        Our Mission
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: "8rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <Divider
                                            sx={{
                                                background:
                                                    theme.palette.custom
                                                        .darkMuted,
                                            }}
                                        />
                                    </Box>
                                    <Typography>
                                        At{" "}
                                        <strong>
                                            Flavor Exceptional Catering
                                        </strong>
                                        , the success of your event is our
                                        number one priority. We combine
                                        thoughtfully crafted food and service
                                        with any celebration.
                                    </Typography>
                                    <Typography>
                                        We strive to provide the highest quality
                                        food and service to each of our clients.
                                        Whether you are planning a wedding,
                                        hosting a corporate event, or putting
                                        together a once-in-a-lifetime brunch, we
                                        will work closely with you to craft an
                                        experience that will have everyone
                                        talking about it for years to come.
                                    </Typography>
                                    <Typography>
                                        Our mission may end at the table, but it
                                        starts well before that. We are
                                        committed to sourcing all of our
                                        ingredients from local, sustainable, and
                                        fair-trade vendors whenever possible. We
                                        believe that great food comes from great
                                        community, and we design our experiences
                                        to reflect that commitment.
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link href="/about">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                            >
                                                Learn More
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ padding: "2rem" }}>
                                    <NativeImage
                                        image={homePage.image}
                                        url={homePage.image.url}
                                        maxSize={800}
                                    />
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontSize: ".85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Chefs Danny and Sandy
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box
                className="section"
                sx={{ backgroundColor: theme.palette.secondary.main }}
            >
                <Container maxWidth="xl">
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.custom.light,
                            textAlign: "center",
                            fontSize: "4rem",
                            marginBottom: ".5em",
                        }}
                    >
                        Sample Menus
                    </Typography>
                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="breakfast"
                                    image={homePage.image3}
                                >
                                    Like finger food? So do we! Feast! This is a
                                    longer description so that I can test to see
                                    how it looks when one description is longer
                                    and one is sorter.
                                </MenuPreview>
                            </Grid>
                            <VerticalDivider
                                color={theme.palette.custom.lightMuted}
                                width={0.4}
                            />
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="luncheon"
                                    image={homePage.image4}
                                >
                                    Impress your friends with a delicious South
                                    American Feast! Whether you&rsquo;re in the
                                    mood for tacos, quesadillas, flautas, or
                                    chips and guac, this meal is sure to
                                    satisfy!
                                </MenuPreview>
                            </Grid>

                            <VerticalDivider
                                width={0.4}
                                color={theme.palette.custom.lightMuted}
                            />
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="Dinner"
                                    image={homePage.image5}
                                >
                                    Get a taste of good old New Orleans
                                    community with this delicious crawdad feast,
                                    which includes potatoes, corn, cornbread,
                                    and hurricanes!
                                </MenuPreview>
                            </Grid>
                            <VerticalDivider
                                width={0.4}
                                color={theme.palette.custom.lightMuted}
                            />
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="cocktail"
                                    image={homePage.image6}
                                >
                                    Go all out on gameday with our delicious
                                    selection of roasted meats, grilled sides,
                                    and sweet tea! Be sure to order extra so you
                                    can send everyone home with something for
                                    later!
                                </MenuPreview>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
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
                                Let us take care of you
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "75ch",
                                    marginBottom: "1em",
                                }}
                            >
                                Planning an event doesn&rsquo;t have to be a
                                hassle. Let us do all the heavy lifting, so that
                                you can get back to what&rsquo;s important:
                                spending quality time with your family and
                                cherished ones.
                            </Typography>
                            <Favorite />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/stock3.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: { xs: "0% 0%", md: "50% 50%" },
                    height: "50vh",
                }}
            />
        </Container>
    );
}
