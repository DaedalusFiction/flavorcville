import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import Carousel from "../../components/general/Carousel";
import Stripes from "../../components/layout/Stripes";
import { about, events, hero } from "../../siteInfo";
import Link from "next/link";
import EventPackage from "../../components/layout/EventPackage";

const index = () => {
  return (
    <Box className="section">
      <Container sx={{ marginTop: "4rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <Carousel>
              {events.carouselImages.map((carouselImage, index) => {
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
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                }}
                variant="h1"
              >
                Weddings
              </Typography>
              <Divider />
              <Typography sx={{ maxWidth: "75ch", margin: "0 auto" }}>
                At Flavor Exceptional Catering, our mission is to elevate every
                event through the art of thoughtful catering. We believe that
                food is more than just sustenance; it is a powerful medium for
                connection, celebration and memory-making. We pride ourselves on
                providing exceptional service, ensuring that every detail is
                attended to with care and precision.
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
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={3}>
            <EventPackage
              header="Month-of Wedding Execution"
              list={[
                "Initial consultation (4–6 weeks before)",
                "Unlimited email/phone communication during final month",
                "Final venue walkthrough",
                "Vendor confirmations & payment reminders",
                "Custom, detailed wedding timeline",
                "Rehearsal, Ceremony and Reception Coordination",
                "Full wedding day management (up to 12 hours)",
              ]}
            >
              <Typography>
                For couples who want support beyond just the wedding day, our
                <strong>Month-of Coordination </strong>service allows us to step
                in <strong>one month before</strong> the event and take over
                planning communications.
              </Typography>
              <Typography>
                We manage last-minute vendor questions, finalize a detailed
                timeline, and make sure every detail is thoughtfully handled so
                nothing is missed.
              </Typography>
            </EventPackage>
            <EventPackage
              header="Signature Wedding Planning"
              list={[
                "Initial Planning Consultation to understand the couple, define the vision and set clear next steps.",
                "Vendor Recommendations & Coordination to help you find trusted professionals and communicate your needs clearly. To assist with clarification of any vendor contracts.",
                "Two Venue Site Visits: Initial visit: focused on design, decor and floorplan, Final Walk Thru: 30 days before wedding ",
                "Budget Guidance to keep your spending on track without sacrificing your vision",
                "Timeline Creation outlining key milestones and the wedding day schedule",
                "Regular Check-Ins & Updates to keep you on track and confident in the process",
                "Assistance with Design & Décor to help personalize your day with meaningful touches",
                "Final Review & Confirmation of Vendors and Details about 4–6 weeks before your wedding",
                "Rehearsal & Day-of Coordination: One professional and one assistant to manage the timeline, vendors, and logistics so you can enjoy your celebration worry-free",
                "Up to 12 hours on day of wedding.",
              ]}
            >
              <Typography>
                Our <strong>Signature Planning</strong> service is designed for
                couples who have started planning but could use professional
                guidance to pull everything together with confidence. Maybe the
                venue is booked and a few vendors are secured, but the growing
                list of details feels a bit daunting. That’s where Flavor comes
                in—to help create a smooth, stress-free journey to your wedding
                day.
              </Typography>
              <Typography>
                Starting about <strong>4–6 months before</strong> the
                celebration, we become your trusted planning partner. We work
                closely with you to fine-tune your vision, communicate with
                vendors, and oversee the details so every element comes together
                beautifully.
              </Typography>
            </EventPackage>
            <EventPackage
              header="Full Wedding Planning"
              list={[
                "Initial Consultation & Vision Development to capture your style, values, and dreams",
                "Comprehensive Budget Management to maximize your investment and avoid surprises",
                "Vendor Sourcing & Booking with trusted professionals tailored to your needs",
                "Design & Décor Planning to create a beautiful, cohesive look that tells your story",
                "Regular Planning Meetings & Updates to keep you informed and confident",
                "Detailed Wedding Day Timeline & Run-Throughs to ensure flawless flow",
                "Unlimited Communication & Support for all questions and concerns along the way",
                "Full Day-of Coordination overseeing vendors, setup, ceremony, and reception",
                "Problem Solving & Emergency Management so you never have to worry about a thing",
              ]}
            >
              <Typography>
                Our <strong>Full Wedding Planning</strong> service is perfect
                for couples seeking a completely stress-free and seamless
                journey from the moment you say “Yes!” to your final dance. If
                you envision a wedding that truly tells your love story —
                crafted with care, creativity, and expert precision — this
                package is made for you.
              </Typography>
              <Typography>
                <strong>From the very beginning,</strong> we step in as your
                dedicated partner, guiding you through every stage of the
                planning process. We manage everything — from budgeting and
                vendor selection to design, timelines, and day-of coordination —
                so you can relax and fully enjoy this unforgettable chapter of
                your life.
              </Typography>
            </EventPackage>
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

const packageDetails = [{ header: "Month-of Wedding Execution" }];

export default index;
