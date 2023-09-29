import { Box, Button, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { hero, homePage } from "../siteInfo";
import NativeImage from "../components/general/NativeImage";
import Carousel from "../components/general/Carousel";
import SizedImage from "../components/general/SizedImage";
import SellingPoint from "../components/home/SellingPoint";
import Link from "next/link";
import MenuPreview from "../components/home/MenuPreview";
import VerticalDivider from "../components/layout/VerticalDivider";
import Stripes from "../components/layout/Stripes";
import SocialMediaIconsSidebar from "../components/general/SocialMediaIconsSidebar";
import BlockQuote from "../components/general/BlockQuote";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters sx={{ position: "relative" }}>
            <Meta />
            <Hero />
            <Stripes />
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    position: "fixed",
                    top: "10rem",
                    right: "3vw",
                    zIndex: "10",
                }}
            >
                <SocialMediaIconsSidebar color="primary" direction="column" />
            </Box>
            <Container maxWidth="xl">
                <Grid id="showcase" container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                                padding: "6rem 2rem 4.5rem 2rem",
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
                                <strong>Flavor Exceptional Catering</strong>{" "}
                                provides outstanding service, from simple
                                drop-offs to full-service events. Whether you
                                are looking to feed a few for a breakfast or
                                luncheon or make your next intimate event
                                exceptional, we are here to craft an experience
                                that fits your needs perfectly!
                            </Typography>
                            <Box sx={{ transform: "scaleY(1)" }}>
                                <SizedImage
                                    image={hero.imageTwo}
                                    height={100}
                                    width={250}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Carousel>
                            {homePage.carouselImages.map(
                                (carouselImage, index) => {
                                    return (
                                        <SizedImage
                                            key={index}
                                            image={carouselImage.image}
                                            height="400px"
                                            width="600px"
                                        />
                                    );
                                }
                            )}
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>

            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    padding: { xs: "6rem 0", md: "14rem 0 6rem 0" },
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <SellingPoint title="Responsive">
                                There&rsquo;s nothing we love more than working
                                directly with our clients and getting to know
                                their exact thoughts and ideas, so that we can
                                source foods and products based on their
                                preferences. Whether it&rsquo;s meats from local
                                Ragged Branch Farms or produce from growers
                                along Skyline Drive, we are committed to using
                                the freshest ingredients for every occasion.
                            </SellingPoint>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    height: { xs: "40vh", md: "100%" },
                                    backgroundImage:
                                        "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/doug.webp)",
                                    backgroundSize: "cover",
                                    backgroundPosition: {
                                        xs: "0% 0%",
                                        md: "40% 0%",
                                    },
                                }}
                            ></Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <SellingPoint title="Experienced">
                                <strong>Flavor</strong> has over 30 years
                                combined experience in the fields of Catering
                                and Hospitality. We have executed countless
                                successful events, from weddings and graduation
                                parties to corporate lunches and all-day events.
                                We guarantee that our experience will make your
                                next event stress-free and remembered for years
                                to come.
                            </SellingPoint>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/banner5.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: { xs: "0% 0%", md: "50% 50%" },
                    height: { xs: "40vh", md: "40vh" },
                }}
            />
            <Box
                className="section"
                sx={{ background: theme.palette.secondary.main }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        Vegetarian & Vegan Friendly
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Divider
                            sx={{
                                background: theme.palette.custom.dark,
                                margin: "1rem 0",
                                width: "20rem",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: theme.palette.custom.dark,
                        }}
                    >
                        <strong>Flavor Exceptional Catering</strong> is
                        dedicated to making sure that everyone at your event
                        goes home satisfied. We make every dish we serve from
                        scratch, meaning that we are able to tailor any of our
                        dishes to your unique dietary restrictions, and we can
                        do so while maintaining the flavor and quality that
                        makes us, well, exceptional.
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: theme.palette.custom.dark,
                        }}
                    >
                        Our commitment doesn&rsquo;t end with vegetarian and
                        vegan options. Whether you&rsquo;re looking for a meal
                        plan that is gluten-free and/or dairy-free, that works
                        around allergies or any other preferences, we&rsquo;ll
                        work with you to make sure you get exactly what
                        you&rsquo;re looking for.
                    </Typography>
                    <Box
                        sx={{
                            transform: "scaleY(1)",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: ".5rem",
                        }}
                    >
                        <SizedImage
                            image={hero.imageTwo}
                            height={100}
                            width={250}
                        />
                    </Box>
                </Container>
            </Box>
            <Stripes />
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
                                        component="p"
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
                                        number one priority. We bring
                                        thoughtfully crafted food and
                                        top-quality service to any celebration.
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
                                            <Button color="primary">
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
                                        component="p"
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
                        component="p"
                        sx={{
                            color: "black",
                            textAlign: "center",
                            fontSize: "4rem",
                            marginBottom: ".5em",
                        }}
                    >
                        Sample Menus
                    </Typography>
                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={2.7}>
                                <MenuPreview
                                    title="breakfast"
                                    image={homePage.image3}
                                >
                                    There&rsquo;s a reason why the first meal of
                                    the day is the most important. Start your
                                    event off right with a selection of healthy,
                                    fresh, delicious breakfast options, local
                                    coffee, and hot tea.
                                </MenuPreview>
                            </Grid>
                            <VerticalDivider
                                color={theme.palette.custom.dark}
                                width={0.4}
                            />
                            <Grid item xs={12} lg={2.7}>
                                <MenuPreview
                                    title="luncheon"
                                    image={homePage.image4}
                                >
                                    Whether you&rsquo;re looking for a light
                                    collation or a hearty meal, Flavor
                                    Exceptional Catering is ready with a variety
                                    of luncheon options tailored to your
                                    event&rsquo;s needs.
                                </MenuPreview>
                            </Grid>

                            <VerticalDivider
                                width={0.4}
                                color={theme.palette.custom.dark}
                            />
                            <Grid item xs={12} lg={2.7}>
                                <MenuPreview
                                    title="dinner"
                                    image={homePage.image5}
                                >
                                    Let&rsquo;s create an experience that you
                                    and your loved ones can bond over. Flavor
                                    Exceptional Catering will craft a
                                    personalized dinner menu that will leave a
                                    long-lasting impression.
                                </MenuPreview>
                            </Grid>
                            <VerticalDivider
                                width={0.4}
                                color={theme.palette.custom.dark}
                            />
                            <Grid item xs={12} lg={2.7}>
                                <MenuPreview
                                    title="cocktail"
                                    image={homePage.image6}
                                >
                                    There&rsquo;s nothing better than a wide
                                    selection of delicious appetizers to bring
                                    out the best of conversation. Between our
                                    unique flavor profiles and vegetarian and
                                    vegan options, there&rsquo;s sure to be
                                    something for everyone.
                                </MenuPreview>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                transform: "scaleY(1)",
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "2rem",
                            }}
                        >
                            <SizedImage
                                image={hero.imageTwo}
                                height={100}
                                width={250}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Stripes />
            <Container maxWidth="xl">
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    // height: "100%",
                                    flexDirection: "column",
                                    padding: "2rem",
                                    gap: "1rem",
                                }}
                            >
                                <Typography variant="h6" component="p">
                                    Our Partners
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: "35ch",
                                        textAlign: "center",
                                        fontStyle: "italic",
                                    }}
                                >
                                    We also provide healthy meals daily for UVA
                                    Greek Life, pre- and post-game and practice
                                    meals for UVA athletics. We are also the
                                    official caterer of the{" "}
                                    <strong>Foxfield Races</strong>.
                                </Typography>
                                <Box
                                    sx={{
                                        transform: "scaleY(1)",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SizedImage
                                        image={hero.imageTwo}
                                        height={50}
                                        width={125}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".5rem",
                                }}
                            >
                                <Divider />
                                <Typography
                                    variant="h2"
                                    component="p"
                                    sx={{
                                        fontSize: "1.5rem",
                                        margin: ".5em 0",
                                    }}
                                >
                                    Preferred Venues
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Typography>
                                                UVA Alumni Hall
                                            </Typography>
                                            <Typography>
                                                Michael Shaps Winery
                                            </Typography>
                                            <Typography>
                                                The Brick Cellar
                                            </Typography>
                                            <Typography>
                                                Random Row Brewing Company
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Typography>
                                                The Code Building
                                            </Typography>
                                            <Typography>
                                                Eastwood Winery
                                            </Typography>
                                            <Typography>
                                                The Barn at Edgewood
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".5rem",
                                }}
                            >
                                <br />
                                <Divider />
                                <Typography
                                    variant="h2"
                                    component="p"
                                    sx={{
                                        fontSize: "1.5rem",
                                        margin: ".5em 0",
                                    }}
                                >
                                    UVA Sports & Associations
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Typography>
                                                Alumni Association
                                            </Typography>
                                            <Typography>Football</Typography>
                                            <Typography>
                                                Men&rsquo;s & Women&rsquo;s
                                                Soccer
                                            </Typography>
                                            <Typography>
                                                Men&rsquo;s & Women&rsquo;s
                                                Lacrosse
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Typography>
                                                Field Hockey
                                            </Typography>
                                            <Typography>Volleyball</Typography>
                                            <Typography>Tennis</Typography>
                                            <Typography>Softball</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box
                className="section"
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                }}
            >
                <BlockQuote attribution="Ashley S. Morris">
                    Between the spectacular venue, gorgeous florals, delicious
                    food & drink, fun photography ops, professional casino
                    tables, and all of the planning that made everything come
                    together&mdash;both we and our friends and family had an
                    incredible time.
                </BlockQuote>
            </Box>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/banner3.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: { xs: "60% 0%", md: "50% 50%" },
                    height: { xs: "40vh", md: "40vh" },
                }}
            />
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
                            <Box sx={{ transform: "scaleY(1)" }}>
                                <SizedImage
                                    image={hero.imageTwo}
                                    height={50}
                                    width={125}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}
