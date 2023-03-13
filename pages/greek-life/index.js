import { Favorite, StarBorder } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import { greek, menus } from "../../siteInfo";

const index = () => {
    return (
        <Container className="section">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "4rem",
                        }}
                    >
                        <NativeImage
                            image={greek.imageOne}
                            url={greek.imageOne.url}
                            maxSize={800}
                        />
                    </Box>
                </Container>
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Greek Life
                </Typography>
                <StarBorder />

                <Typography sx={{ maxWidth: "75ch", textAlign: "center" }}>
                    Community is built on conversation, and conversation is
                    built on food. When you choose to join Greek life at UVA,
                    you want to be sure that the community you&rsquo;re becoming
                    part of has that solid foundation. We&rsquo;ve got you
                    covered with delicious, healthy meals for breakfast, lunch,
                    or dinner, along with the exceptional service we have come
                    to be known for over the years.
                </Typography>
                <Typography sx={{ maxWidth: "75ch", textAlign: "center" }}>
                    And when it comes to Greek Life, you also want to know that
                    you&rsquo;re offering something unique, something that will
                    spark conversations outside of the chapter house.
                    That&rsquo;s why we are committed to working closely with
                    each and every sorority and fraternity to develop meal plans
                    that bring out the best in your chapter.
                </Typography>
                <Typography sx={{ maxWidth: "75ch", textAlign: "center" }}>
                    When you go with{" "}
                    <strong>Flavor Exceptional Catering</strong>, you know
                    you&rsquo;ll feel confident when you say you&rsquo;ve got
                    the best food in town.
                </Typography>
                <Link href="/contact">
                    <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default index;
