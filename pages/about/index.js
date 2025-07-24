import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import Carousel from "../../components/general/Carousel";
import Stripes from "../../components/layout/Stripes";
import { about, hero } from "../../siteInfo";

const index = () => {
  return (
    <Box className="section">
      <Container sx={{ marginTop: "4rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <Carousel>
              {about.carouselImages.map((carouselImage, index) => {
                return (
                  <SizedImage
                    key={index}
                    image={carouselImage.image}
                    height="400px"
                    width="600px"
                  />
                );
              })}
            </Carousel>
          </Grid>
          <Grid item xs={12} lg={4}>
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
                <Typography
                  variant="h3"
                  sx={{ marginTop: "1rem", textAlign: "center" }}
                >
                  Chefs Megan and Stan
                </Typography>
                <Divider sx={{ width: "80%" }} />
                <Typography>Bio coming soon...</Typography>
                <Typography></Typography>
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
