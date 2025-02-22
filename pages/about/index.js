import { Favorite, StarBorder } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import Stripes from "../../components/layout/Stripes";
import { about, greek, hero, menus } from "../../siteInfo";

const index = () => {
  return (
    <Box className="section">
      <Container sx={{ marginTop: "4rem" }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NativeImage
                  image={about.imageOne}
                  url={about.imageOne.url}
                  maxSize={600}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography variant="h1">About Us</Typography>
              <Divider />
              <Typography sx={{ maxWidth: "75ch" }}>
                At Flavor Exceptional Catering, our mission is to elevate every
                event through the art of thoughtful catering. We believe that
                food is more than just sustenance; it is a powerful medium for
                connection, celebration and memory-making. We pride ourselves on
                providing exceptional service, ensuring that every detail is
                attended to with care and precision. Our dedicated team is
                passionate about creating personalized experiences that cater to
                the unique needs and preferences of our clients. At Flavor
                Exceptional Catering, we don&rsquo;t just cater events; we
                create lasting experiences that bring people together.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          margin: "4rem 0",
        }}
      >
        <Stripes />
      </Box>
      <Container maxWidth="md">
        <Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <NativeImage
                  image={about.imageTwo}
                  url={about.imageTwo.url}
                  maxSize={600}
                />
                <Typography variant="h3" sx={{ marginTop: "1rem" }}>
                  Chef Sandy
                </Typography>
                <Divider sx={{ width: "80%" }} />
                <Typography>
                  Sandy Archer has a tremendous gift of hospitality and a talent
                  for culinary preparation and presentation. She has been
                  involved in the restaurant business for more than 27 years,
                  and she has worked in several different capacities, including
                  chef, manager, business director, and owner. She holds
                  undergraduate and graduate business degrees, both from the
                  University of Virginia.
                </Typography>
                <Typography>
                  Between raising four children with her husband, running a
                  business, staying fit, and serving her community in numerous
                  ways, Chef Sandy hopes that her life will be a true
                  inspiration for many.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <NativeImage
                  image={about.imageThree}
                  url={about.imageThree.url}
                  maxSize={600}
                />
                <Typography variant="h3" sx={{ marginTop: "1rem" }}>
                  Chef Danny
                </Typography>
                <Divider sx={{ width: "80%" }} />
                <Typography>
                  Daniel Niedermayer began his culinary career at a young age at
                  the Keswick Hotel, where he worked as a banquet cook. He then
                  went on to study business management at Bridgewater College.
                  After leaving Bridgewater, he went to work for Hilton as their
                  Director of Food and Beverage. There, he quickly fell back in
                  love with the culinary aspects of hospitality and began
                  training with the Culinary Institute of America and Hilton
                  University.
                </Typography>
                <Typography>
                  Danny enjoys every aspect of his role in the kitchen, from the
                  creation of delicious, memorable dishes to the leadership of
                  his team of charismatic and incredibly talented cooks. He
                  would tell you that his strongest attributes are friendliness,
                  patience, and amicable communication skills, and he cherishes
                  the experience of meeting with each client and designing
                  outstanding menus around their unique personalities and
                  desires.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
            }}
          >
            <Box
              sx={{
                transform: "scaleY(1)",
                display: "flex",
                justifyContent: "center",
                marginTop: ".5rem",
              }}
            >
              <SizedImage image={hero.imageTwo} height={100} width={250} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
